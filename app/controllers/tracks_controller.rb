class TracksController < ApplicationController
  def index
    @tracks = get_tracks
  end
  def get_tracks
    get_soundcloud
  end
  def get_soundcloud
    search_conditions = get_search_conditions
    tracks = send_soundcloud_request(search_conditions)
    Rails.logger.debug "\nfuck these are the search conds: #{search_conditions.inspect}\n"
    Rails.logger.debug "\nfuck these are the tracks class shit: #{tracks.class}\n"
    Rails.logger.debug "\nfuck these are the tracks inspect shit: #{tracks.inspect}\n"
    tracks_filtered = filter_soundcloud(search_conditions, tracks)

    return tracks_filtered
  end
  def get_search_conditions
    search_conditions = {:bpm_low => 100, :bpm_high => 101, :downloadable => true}
  end
  def send_soundcloud_request(search_conditions)
    client = Soundcloud.new(:client_id => "3b231e0d3965769fca79609187395e53", :client_secret => "6fa197d26ceca704d88d5b3d070b6949")
    begin
      tracks = client.get('/tracks', :limit => 100, :bpm => {:from => search_conditions[:bpm_low], :to => search_conditions[:bpm_high]} )
    rescue
      search_conditions[:bpm_high] += 1
      send_soundcloud_request(search_conditions)
    end
    return tracks
  end
  def filter_soundcloud(search_conditions, tracks)
    tracks_filtered = []
    tracks.each do |track|
      true_count = 0
      search_conditions.each do |key, value|
        #Rails.logger.debug "\nfuck this is a search cond: #{key}, #{value}, #{track[key]}\n"

        case key
        when :bpm_low
          #Rails.logger.debug "\nfuck this is a bpm_low: #{key}, #{value}, #{track[key]}\n"
          if track.bpm >= search_conditions[:bpm_low] and track.bpm <= search_conditions[:bpm_high]
            #Rails.logger.debug "\nfuck this is a bpm_low and bpm_high match: #{key}, #{value}, #{track[key]}\n"
            true_count += 1
          end
        when :bpm_high
          #Rails.logger.debug "\nfuck this is a bpm_high: #{key}, #{value}, #{track[key]}\n"
          if track.bpm >= search_conditions[:bpm_low] and track.bpm <= search_conditions[:bpm_high]
            #Rails.logger.debug "\nfuck this is a bpm_low and bpm_high match: #{key}, #{value}, #{track[key]}\n"
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
    return tracks_filtered
  end
end
