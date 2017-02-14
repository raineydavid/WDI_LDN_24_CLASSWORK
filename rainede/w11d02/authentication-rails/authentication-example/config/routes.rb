Rails.application.routes.draw do
  resources: :users only: [:index, :create]
  get '/register', to: "users#new"
  # get 'users/index'
  #
  # get 'users/new'
  #
  # get 'users/create'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
