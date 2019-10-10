Rails.application.routes.draw do
  namespace :api, default: {format: :json} do
    resources :users, only: [:create, :update, :show]
    resource :session, only: [:create, :destroy]
  end

  root "static_pages#root"
end
