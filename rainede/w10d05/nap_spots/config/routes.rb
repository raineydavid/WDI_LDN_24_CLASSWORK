Rails.application.routes.draw do
  get "home", to: "statics#home"
  get "about", to: "statics#about"
  root "spots#index"
  resources :spots
  # get    "/spots"          , to: "spots#index"
  # post   "/spots"          , to: "spots#create"
  # get    "/spots/new"      , to: "spots#new"
  # get    "/spots/:id/edit" , to: "spots#edit"
  # get    "/spots/:id"      , to: "spots#show"
  # put    "/spots/:id"      , to: "spots#update"
  # delete "/spots/:id"      , to: "spots#destroy"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
