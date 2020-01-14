Rails.application.routes.draw do
  root "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create] do
      resources :decks, only:[:index]
    end
    resources :folders, only: [:create, :show, :update, :destroy, :index]
    resource :session, only: [:create, :destroy, :show]
    resources :decks do
      resources :cards
    end
    resources :categories do
      resources :decks, only:[:index]
    end
    resources :sub_categories do
      resources :decks, only:[:index]
    end
  end

  # get 'sets/charities', :to => 'profiles#charities_index'
end
