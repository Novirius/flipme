Rails.application.routes.draw do

  root "static_pages#root"
  
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create] do
      resources :folders, only: [:create, :show, :update, :destroy, :index]
    end
    resource :session, only: [:create, :destroy, :show]
    resources :decks do
      resources :cards
    end
    resources :categories do
      resources :sub_categories
    end
  end


end
