class SessionsController < ApiController
  skip_before_action :require_login, only: [:create], raise: false

  def create
    if user = User.valid_login?(params[:email], params[:password])
      allow_token_to_be_used_only_once_for(user)
      send_auth_token_for_valid_login_of(user)
    else
      render_unauthorized("Invalid credentials")
    end
  end

  def destroy
    logout
    head :ok
  end

  private

  def send_auth_token_for_valid_login_of(user)
    json_response(user, :ok)    
  end

  def allow_token_to_be_used_only_once_for(user)
    user.regenerate_token
  end

  def logout
    current_user.invalidate_token if current_user
  end
end