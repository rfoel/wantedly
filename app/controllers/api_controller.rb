class ApiController < ApplicationController
  def require_login
    authenticate_token || render_unauthorized("Access denied")
  end

  def current_user
    @current_user ||= authenticate_token
  end

  def check_uniqueness
    if params[:email]
      if User.find_by_email params[:email] 
        json_response({error: {message: 'Email already in use'}},:ok)        
      else
        json_response(:ok)        
      end
    end
  end

  protected

  def render_unauthorized(message)
    errors = { errors: [ { detail: message } ] }
    render json: errors, status: :unauthorized
  end

  private

  def authenticate_token
    authenticate_with_http_token do |token, options|
      if user = User.find_by(token: token)
        ActiveSupport::SecurityUtils.secure_compare(::Digest::SHA256.hexdigest(token),::Digest::SHA256.hexdigest(user.token))
        user
      end
    end
  end
end
