require 'test_helper'

class SecretsControllerTest < ActionDispatch::IntegrationTest
  test "should get secret" do
    get secrets_secret_url
    assert_response :success
  end

  test "should get visible" do
    get secrets_visible_url
    assert_response :success
  end

end
