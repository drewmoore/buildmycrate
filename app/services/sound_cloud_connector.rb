class SoundCloudConnector
  def initialize(query)
    @tracks        = []
    @filters       = { key_signature: query[:key_signature] }
    @error         = nil
    @client_id     = ENV['SOUND_CLOUD_CLIENT_ID']
    @client_secret = ENV['SOUND_CLOUD_CLIENT_SECRET']
    retrieve_tracks(bpm_min: query[:bpm_min], bpm_max: query[:bpm_max])
  end

  def tracks
    @tracks.select do |track|
      matches = @filters.map do |key, value|
        next unless value.present?
        track[key].downcase! if track[key].is_a?(String)
        track[key] == value.downcase
      end
      !matches.include? false
    end[0...result_limit]
  end

  def error
    @error
  end

  private

  def request_limit
    2
  end

  def result_limit
    50
  end

  # Determine the number of results to request from Soundcloud per HTML request.
  # If a key signature is in the filter, more results will be needed to filter
  # through. Otherwise, we only need the number we want to return.
  def per_request
    @filters[:key_signature].present? ? 200 : result_limit
  end

  def retrieve_tracks(query)
    request_count = 0
    soundcloud = Soundcloud.new(
      client_id: @client_id, client_secret: @client_secret
    )
    until(
      @tracks.count >= result_limit  ||
      request_count == request_limit || @error
    )
      bpm_max = query[:bpm_max].present? ? query[:bpm_max] : query[:bpm_min]
      begin
        @tracks += soundcloud.get(
          '/tracks',
          limit:  per_request,
          offset: request_count * per_request,
          bpm:    { from: query[:bpm_min].to_s, to: bpm_max.to_s }
        )
      rescue => e
        @error = e
      end
      request_count += 1
    end
  end
end
