class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_action :set_client_app_initializers

  private

  # Set any data that will be needed upon rendering the React app client-side.
  def set_client_app_initializers
    return unless request.format == 'html'
    @initializers = { soundcloud: { client_id: ENV['SOUND_CLOUD_CLIENT_ID'] } }
  end
end
