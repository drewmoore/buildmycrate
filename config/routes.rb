Rails.application.routes.draw do

  resources :tracks
  root 'home#index'
  get '/callback', to: 'callbacks#callback'

  # For testing react rewrite.
  get '/react', to: 'home#react'
end
