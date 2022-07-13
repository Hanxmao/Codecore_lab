Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  get '/home' => 'welcome#home'
  get '/about' => 'welcome#about'
  get '/contact' => 'welcome#contact'
  get '/thank_you' => 'welcome#thank_you'

  get '/seperate' => 'bills#seperate'
  get '/bills_result' => 'bills#bills_result'

  get '/' => 'products#index'
  resources 'products' do
    resources :reviews, only: [:create, :destroy]
  end

  resources 'users', only: [:new, :create]
  resource 'session', only: [:new, :create, :destroy]
end
