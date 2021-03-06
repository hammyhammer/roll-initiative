Rails.application.routes.draw do
  resources :users

  resources :characters do
    resources :stats
  end

  post '/auth/login', to: 'authentications#login'
  get '/auth/verify', to: 'authentications#verify'

  get '/stats', to: 'stats#get_all_stats'
  get '/users/:user_id/stats', to: 'stats#get_user_stats' 

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
