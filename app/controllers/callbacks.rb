class CallbacksController < ApplicationController
  def callback
    Rails.logger.debug "fuck callback controller"
    render :file => 'public/callback.html'
  end
end
