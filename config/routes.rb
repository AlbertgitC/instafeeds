Rails.application.routes.draw do
  namespace :api, default: {format: :json} do
    resources :users, only: [:create, :update, :show, :index] do
      get 'followers', to: 'follows#followers'
      get 'following', to: 'follows#following'
      post 'follows', to: 'follows#create'
      delete 'follows', to: 'follows#destroy'
    end
    resources :feeds, only: [:index, :create, :update, :show, :destroy]
    resource :session, only: [:create, :destroy]
  end

  root "static_pages#root"
end
