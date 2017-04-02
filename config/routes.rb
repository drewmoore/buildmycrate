Rails.application.routes.draw do
  resources :tracks
  root 'home#index'
  get '/callback', to: 'callbacks#callback'

  get '/search', to: 'tracks#search'
end
