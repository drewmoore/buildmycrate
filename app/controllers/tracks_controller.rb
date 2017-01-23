class TracksController < ApplicationController
  def index
    soundcloud = SoundCloudConnector.new(params)
    @soundcloud_client_id = ENV['SOUND_CLOUD_CLIENT_ID']
    @tracks               = soundcloud.tracks
    @error                = soundcloud.error
    if @error
      flash[:alert] = @error.message
      redirect_to controller: :home, action: :index
    end
  end
end
