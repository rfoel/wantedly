Rails.application.routes.draw do

  resources :users, controller: 'users'
  resource :user, controller: 'user' do
    post "sign_in" => "sessions#create"
    delete "sign_out" => "sessions#destroy"
  end
  resources :users, controller: 'skills'
  
end
