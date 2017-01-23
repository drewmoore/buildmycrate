class SoundCloudConnector
  class << self
    def request_limit
      7
    end

    def result_limit
      200
    end
  end

  def initialize(query)
    @tracks     = []
    @soundcloud = Soundcloud.new(
      client_id: ENV['SOUND_CLOUD_CLIENT_ID'],
      client_secret: ENV['SOUND_CLOUD_CLIENT_SECRET']
    )
    @filters    = { key_signature: query[:key_signature] }
    retrieve_tracks(bpm_min: query[:bpm_min], bpm_max: query[:bpm_max])
  end

  def tracks

    puts "\n hello tracks: #{@tracks.count}, error: #{@error}\n"

    @tracks.select do |track|
      matches = @filters.map do |key, value|
        track[key] == value
      end
      !matches.include? false
    end
  end

  def error
    @error
  end

  private

  def retrieve_tracks(query)
    request_count = 0
    until request_count == self.class.request_limit
      begin
        @tracks += @soundcloud.get(
          '/tracks', limit: self.class.result_limit,
          offset: request_count * self.class.result_limit,
          bpm: {
            from: query[:bpm_min], to: query[:bpm_max] || query[:bpm_min]
          }
        )
      rescue => e
        @error = e
      end
      request_count += 1
    end
  end
end
