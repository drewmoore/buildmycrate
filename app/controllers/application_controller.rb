class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_action :set_initial_state

  private

  # TODO: test. use required params.
  def set_initial_state
    return unless request.format == 'html'
    @initial_state = {
      search: {
        bpm_min:       params[:bpm_min],
        bpm_max:       params[:bpm_max],
        key_signature: params[:key_signature]
      }
    }
  end
end
