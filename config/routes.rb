Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :benches, only: [:index, :create]
    resource :user, only: [:create, :show, :destroy]
    resource :session, only: [:create, :destroy]
  end
end
