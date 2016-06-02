class CallbacksController < ApplicationController
  def callback
    render :file => 'public/callback.html'
  end
end
