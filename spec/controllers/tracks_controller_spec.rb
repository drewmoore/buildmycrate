require 'rails_helper'

RSpec.describe TracksController, type: :controller do
  bpm_min       = 100
  bpm_max       = 130
  key_signature = 'C'

  describe 'GET #index' do
    before do
      VCR.use_cassette :tracks_index_success do
        get(
          :index, params: {
            bpm_min: bpm_min, bpm_max: bpm_max,
            key_signature: key_signature
          }
        )
      end
    end

    it 'responds successfully' do
      expect(response).to be_success
      expect(response).to have_http_status(200)
    end

    it 'renders template' do
      expect(response).to render_template('index')
    end

    describe '@tracks' do
      it 'responds with search results' do
        expect(assigns(:tracks)).to be_a(Array)
      end

      it 'only contains results within the bpm range' do
        assigns(:tracks).map(&:bpm).uniq.each do |bpm|
          expect(bpm).to be >= bpm_min
          expect(bpm).to be <= bpm_max
        end
      end

      it 'key signatures are only in the queried key signature' do
        key_signatures = assigns(:tracks).map(&:key_signature).uniq
        raise 'test setup failed' if key_signatures.empty?
        key_signatures.each do |signature|
          expect(signature).to eq(key_signature)
        end
      end
    end
  end
end
