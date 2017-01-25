require 'rails_helper'

RSpec.describe SoundCloudConnector, type: :service do
  bpm_min       = 120
  bpm_max       = 140
  key_signature = 'A'

  let :soundcloud do
    VCR.use_cassette :soundcloud_success do
      SoundCloudConnector.new(
        bpm_min: bpm_min, bpm_max: bpm_max, key_signature: key_signature
      )
    end
  end

  it 'initializes' do
    expect(soundcloud).to be_a(SoundCloudConnector)
  end

  describe :tracks do
    it 'has array of tracks' do
      expect(soundcloud.tracks).to be_a(Array)
    end

    it 'has array of tracks with bpms in established range' do
      bpms = soundcloud.tracks.map(&:bpm).uniq
      raise 'test setup failed' if bpms.empty?
      bpms.each do |bpm|
        expect(bpm).to be >= bpm_min
        expect(bpm).to be <= bpm_max
      end
    end

    it 'key signatures are only in the queried key signature' do
      key_signatures = soundcloud.tracks.map(&:key_signature).uniq
      raise 'test setup failed' if key_signatures.empty?
      key_signatures.each do |signature|
        expect(signature).to eq(key_signature)
      end
    end
  end
end
