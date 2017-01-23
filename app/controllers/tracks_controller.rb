class TracksController < ApplicationController
  def index
    soundcloud = SoundCloudConnector.new(params)
    @tracks    = soundcloud.tracks
    @error     = soundcloud.error
  end
end
