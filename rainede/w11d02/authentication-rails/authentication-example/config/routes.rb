Rails.application.routes.draw do
  resources :users, only: [:index, :create]
  get 'register', to: 'users#new'
  get 'login', to: "sessoins#new"
  delete 'logout', to: "sessoins#destroy"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
