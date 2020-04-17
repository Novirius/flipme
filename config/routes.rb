Rails.application.routes.draw do
  # devise_for :users
  root "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index] do
      resources :decks, only:[:index]
    end
    resources :folders, only: [:create, :show, :update, :destroy, :index]
    resource :session, only: [:create, :destroy, :show]
    resources :decks do
      resources :cards, only: [:index, :create]
    end
    resources :cards, only: [:show, :update, :destroy]
    get 'decks/search/:query', :to => 'decks#search'

    # routes.rb
    devise_for :users, :controllers => { :omniauth_callbacks => "omniauth_callbacks" }  
  end


  
end
