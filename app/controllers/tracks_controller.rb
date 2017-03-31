class TracksController < ApplicationController
  def index

    # TODO: RESTORE
    #soundcloud            = SoundCloudConnector.new(params)
    @soundcloud_client_id = ENV['SOUND_CLOUD_CLIENT_ID']
    #@tracks               = soundcloud.tracks
    @tracks = JSON.parse(File.read(Rails.root.join('soundcloud_sample_response.json')))
    #@error                = soundcloud.error
    @error = nil

    if @error
      if @error.message.include?('503')
        flash[:alert] = 'Sorry, but Soundcloud is currently down.'
      else
        flash[:alert] = @error.message
      end

      # TODO: handle errors with JSON data for react rewrite.
      redirect_to controller: :home, action: :index
    end
  end

  # TODO: render whatever. delete unneeded view file
  def search
  end
end
