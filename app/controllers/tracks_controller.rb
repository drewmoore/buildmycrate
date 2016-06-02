# heroku url:
# http://boiling-anchorage-1792.herokuapp.com/tracks

class TracksController < ApplicationController
  before_action :set_soundcloud_keys

  def index
    @tracks = get_tracks
  end

  def get_tracks
    get_soundcloud
  end

  private

  def set_soundcloud_keys
    @soundcloud_client_id     = ENV['SOUND_CLOUD_CLIENT_ID']
    @soundcloud_client_secret = ENV['SOUND_CLOUD_CLIENT_SECRET']
  end

  def get_soundcloud
    search_conditions = get_search_conditions
    tracks = send_soundcloud_request(search_conditions)

    #Rails.logger.debug "\nthese are the search conds: #{search_conditions.inspect}\n"
    Rails.logger.debug "\nthese are the tracks inspect: #{tracks.inspect}\n"

    tracks_filtered = filter_soundcloud(search_conditions, tracks)

    return tracks_filtered
  end

  def get_search_conditions
    #search_conditions = {:bpm_low => 100, :bpm_high => 105, :downloadable => true, :key_signature => "B", :artist => "mikun"}
    #search_conditions = {:bpm_low => 100, :bpm_high => 105}

    #Rails.logger.debug "\nthese are the params: #{params.inspect}\n"

    params_symbols = params.symbolize_keys
    search_conditions = {}
    params_symbols.each do |k, v|
      unless v.empty? or k == :action or k == :controller
        if v.to_i.to_s == v
          v = v.to_f
        end
        search_conditions[k] = v
      end
    end

    #Rails.logger.debug "\nthese are the search conditions: #{search_conditions.inspect}\n"

    return search_conditions
  end

  def send_soundcloud_request(search_conditions)
    client = Soundcloud.new(client_id: @soundcloud_client_id, :client_secret => @soundcloud_client_secret)
    bpm_low = search_conditions[:bpm_low]
    bpm_high = search_conditions[:bpm_high]

    #Rails.logger.debug "\nthese are the send_soundcloud_req search conditions and stuff: #{search_conditions.inspect} #{bpm_low} #{bpm_high}\n"

    bpm_diff = bpm_high - bpm_low
    bpm_safe = 10
    if bpm_diff < bpm_safe
      bpm_high += (bpm_safe - bpm_diff)
    end
    call_limit = 100
    offset = 0
    calls_to_make = 100
    tracks_accumulated = []
    until offset == calls_to_make
      begin
        tracks = client.get('/tracks', :limit => call_limit, :offset => offset, :bpm => { :from => bpm_low, :to => bpm_high } )
      rescue
        search_conditions[:bpm_high] += 1
        send_soundcloud_request(search_conditions)
      end
      unless tracks.nil?
        tracks_accumulated << tracks
      end
      offset += call_limit
    end
    return tracks_accumulated
  end

  def filter_soundcloud(search_conditions, tracks_accumulated)
    tracks_filtered = []
    tracks_accumulated.each do |tracks|
      tracks.each do |track|
        true_count = 0
        search_conditions.each do |key, value|
          #Rails.logger.debug "\n this is a search cond: #{key}, #{value}, #{track[key]}\n"

          case key
          when :bpm_low
            #Rails.logger.debug "\n this is a bpm_low: #{key}, #{value}, #{track[key]}\n"
            if track.bpm >= search_conditions[:bpm_low] and track.bpm <= search_conditions[:bpm_high]
              #Rails.logger.debug "\n this is a bpm_low and bpm_high match: #{key}, #{value}, #{track[key]}\n"
              true_count += 1
            end
          when :bpm_high
            #Rails.logger.debug "\n this is a bpm_high: #{key}, #{value}, #{track[key]}\n"
            if track.bpm >= search_conditions[:bpm_low] and track.bpm <= search_conditions[:bpm_high]
              #Rails.logger.debug "\n this is a bpm_low and bpm_high match: #{key}, #{value}, #{track[key]}\n"
              true_count += 1
            end
          when :artist
            if track[:user][:username].downcase.include? value.downcase
              true_count += 1
            end
          else
            if track[key] == value
              true_count += 1
            end
          end
        end
        if true_count == search_conditions.length
          tracks_filtered << track
        end
      end
    end
    return tracks_filtered
  end
end
