class SoundCloudConnector
  class << self
    def request_limit
      3
    end

    def result_limit
      200
    end
  end

  def initialize(query)
    @tracks  = []
    @filters = { key_signature: query[:key_signature] }
    @error   = nil
    retrieve_tracks(bpm_min: query[:bpm_min], bpm_max: query[:bpm_max])
  end

  def tracks
    @tracks.select do |track|
      matches = @filters.map do |key, value|
        next unless value.present?
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
    path = "#{Rails.root}/spec/vcr_cassettes/soundcloud_success.yml"
    yaml = YAML.load(File.read(path))
    @tracks += YAML.load(yaml['http_interactions'].first["response"]["body"]["string"]).map(&:with_indifferent_access)

=begin
    request_count = 0
    soundcloud    = Soundcloud.new(
      client_id:     ENV['SOUND_CLOUD_CLIENT_ID'],
      client_secret: ENV['SOUND_CLOUD_CLIENT_SECRET']
    )
    until request_count == self.class.request_limit
      bpm_max = query[:bpm_max].present? ? query[:bpm_max] : query[:bpm_min]
      begin
        @tracks += soundcloud.get(
          '/tracks', limit: self.class.result_limit,
          offset: request_count * self.class.result_limit,
          bpm: {
            from: query[:bpm_min], to: bpm_max
          }
        )
      rescue => e
        @error = e
      end
      request_count += 1
    end
=end
  end
end
