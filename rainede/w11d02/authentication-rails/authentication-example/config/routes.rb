Rails.application.routes.draw do
  get 'secrets/secret'

  get 'secrets/visible'

  root 'users#index'
  resources :users, only: [:index, :create]
  get 'register', to: 'users#new'
  get 'login', to: "sessions#new"
  delete 'logout', to: "sessions#destroy"
  resources :sessions, only: [:create]
end
