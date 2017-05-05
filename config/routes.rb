Rails.application.routes.draw do
  root 'home#index'

  get '/callback', to: 'callbacks#callback'

  get '/search', to: 'tracks#search'
end
