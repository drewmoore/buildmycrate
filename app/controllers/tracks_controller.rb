class TracksController < ApplicationController
  def index
    soundcloud            = SoundCloudConnector.new(params)
    @soundcloud_client_id = ENV['SOUND_CLOUD_CLIENT_ID']
    @tracks               = soundcloud.tracks
    @error                = soundcloud.error
    if @error
      if @error.message.include?('503')
        flash[:alert] = 'Sorry, but Soundcloud is currently down.'
      else
        flash[:alert] = @error.message
      end
      redirect_to controller: :home, action: :index
    end
  end
end
