Rails.application.routes.draw do
  # resources :users

  # resources :users do
  #   resources :characters
  # end

  get '/users', to: 'users#index'
  get '/users/:id', to: 'users#show'
  post '/users', to: 'users#create'
  put '/users/:id', to: 'users#update'
  delete '/users/:id', to: 'users#destroy'

  post '/auth/login', to: 'authentications#login'
  get '/auth/verify', to: 'authentications#verify'

  get '/users/:id/characters', to: 'characters#get_user_characters'
  # get 'users/:id/characters', to: ''
  post '/users/:id/characters/create', to: 'characters#create_user_character'
  # put '/users/:id/characters/'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
