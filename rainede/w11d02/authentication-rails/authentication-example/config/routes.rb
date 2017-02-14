Rails.application.routes.draw do
  resources :users, only: [:index, :create]
  get 'register', to: 'users#new'
  get 'login', to: "sessions#new"
  delete 'logout', to: "sessions#destroy"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :sessions, only: [:create]
end
