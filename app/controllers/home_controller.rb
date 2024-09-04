class HomeController < ApplicationController
  def show
    render json: { clerk_session:, clerk_user: }
  end
end