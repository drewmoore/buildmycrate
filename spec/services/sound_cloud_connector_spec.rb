require 'spec_helper'

RSpec.describe SoundCloudConnector, type: :service do
  bpm_min       = 80
  bpm_max       = 160

  let :soundcloud do
    VCR.use_cassette :soundcloud_success do
      SoundCloudConnector.new(bpm_min: bpm_min, bpm_max: bpm_max)
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
  end
end
