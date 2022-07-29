Rails.application.routes.draw do
  # resources :users

  # resources :users do
  #   resources :characters
  # end

  # get "/users/:user_id/characters", to: "characters#get_user_characters"
  get '/users', to: 'users#index'
  get '/users/:id', to: 'users#show'
  post '/users', to: 'users#create'

  post '/auth/login', to: 'authentications#login'
  get '/auth/verify', to: 'authentications#verify'

  # get '/stats', to: 'stats#get_all_stats'
  # get '/users/:user_id/stats', to: 'stats#get_user_stats' 

  get '/users/:id/characters', to: 'characters#get_user_characters' 
  post '/users/:id/characters/create', to: 'characters#create'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
