Rails.application.routes.draw do

  resources :users, controller: 'users'  do
    get "skills" => "users#user_skills"
    post "skills" => "users#create_user_skill"
    get "skills/:skill_id/endorse" => "users#endorse"
  end
  get "autocomplete" => "users#autocomplete"
  
  resource :user, controller: 'user' do
    post "sign_in" => "sessions#create"
    delete "sign_out" => "sessions#destroy"
    get "skills" => "user#skills"
    post "update_skills" => "user#update_skills"
    post "skill" => "user#create_skill"
    delete "skill" => "user#destroy_skill"
  end
  resources :skills, controller: 'skills', only: [:index, :create, :show] do
    get "users" => "skills#skill_users"    
  end

  post "checkUniqueness" => "api#check_uniqueness"

end
