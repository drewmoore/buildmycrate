class TracksController < ApplicationController
  # Route for performing and rendering searches. When html, an empty template
  # is rendered, and React is loaded. When json, track searches are made and
  # data refreshes search view.
  def search
    respond_to do |format|
      format.html
      format.json do
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
          # TODO: handle errors with JSON data.
          redirect_to controller: :home, action: :index
        end
      end
    end
  end
end
