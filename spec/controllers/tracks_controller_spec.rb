require 'spec_helper'

RSpec.describe TracksController, type: :controller do
  bpm_min       = 100
  bpm_max       = 130

  describe 'GET #index' do
    before do
      VCR.use_cassette :tracks_index_success do
        get(
          :index,
          params: { bpm_min: bpm_min, bpm_max: bpm_max, format: :json }
        )
      end
    end

    it 'responds successfully' do
      expect(response).to be_success
    end

    describe '@tracks' do
      it 'responds with search results' do
        expect(assigns(:tracks)).to be_a(Array)
        expect(assigns(:tracks)).not_to be_empty
      end

      it 'only contains results within the bpm range' do
        assigns(:tracks).map(&:bpm).uniq.each do |bpm|
          expect(bpm).to be >= bpm_min
          expect(bpm).to be <= bpm_max
        end
      end
    end
  end
end
