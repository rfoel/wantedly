Rails.application.routes.draw do

  resources :users, controller: 'users'  do
    get "skills" => "users#user_skills"
    post "skills" => "users#create_skill"
    get "skills/:skill_id/endorse" => "users#endorse"
  end
  resource :user, controller: 'user' do
    post "sign_in" => "sessions#create"
    delete "sign_out" => "sessions#destroy"
    post "skill" => "user#create_skill"
    delete "skill" => "user#destroy_skill"
  end
  resources :skills, controller: 'skills', only: [:index, :create, :show] do
    get "users" => "skills#skill_users"    
  end

end
