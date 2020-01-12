Rails.application.routes.draw do
  root "static_pages#root"
  
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :folders, only: [:create, :show, :update, :destroy, :index]
  end


end
