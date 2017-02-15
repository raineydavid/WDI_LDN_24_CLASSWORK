class SecretsController < ApplicationController
  before_action :authenticate, only: [:secret]
  def secret
    render text: 'Have to be logged in'
  end

  def visible
    render text: "Do not have to be logged in"
  end
end
