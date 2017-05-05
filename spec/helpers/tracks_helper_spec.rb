require 'spec_helper'

RSpec.describe TracksHelper, type: :helper do
  describe :camelize_keys do
    snake_track = {
      title: 'Call Ticketron', user: { username: 'Run the Jewels' },
      bpm: 100, key_signature: 'Fmin',
      download_url: '//runthejewels.com/music/',
      purchase_url: '//itunes.apple.com/us/artist/run-the-jewels/id732932144',
      streamable:   true
    }
    camel_keys = [
      :title, :user, :bpm, :keySignature, :downloadUrl, :purchaseUrl,
      :streamable
    ]

    let :camel_track do
      camelize_keys(snake_track)
    end

    it 'formats all key names as camel-case' do
      expect(camel_track).to include(*camel_keys)
    end
  end
end
