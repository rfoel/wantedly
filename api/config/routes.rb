Rails.application.routes.draw do

  resources :users, controller: 'users'  do
    get "skills" => "users#user_skills"
    post "skills" => "users#create_user_skill"
    get "skills/:skill_id/endorse" => "users#endorse"
  end
  
  resource :user, controller: 'user' do
    post "sign_in" => "sessions#create"
    delete "sign_out" => "sessions#destroy"
    get "skills" => "user#skills"
    post "update_skills" => "user#update_skills"
  end
  
  resources :skills, controller: 'skills', only: [:index]
  
  get "autocomplete" => "users#autocomplete"
  post "checkUniqueness" => "api#check_uniqueness"

end
