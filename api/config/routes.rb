Rails.application.routes.draw do
  scope :format => true, :constraints => { :format => 'json' } do
    post "user/sign_in" => "sessions#create"
    delete "user/sign_out" => "sessions#destroy"
    resource :user, controller: 'user'
    resources :users, controller: 'users'
  end
end
