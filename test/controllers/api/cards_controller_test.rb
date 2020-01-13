require 'test_helper'

class Api::CardsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_cards_index_url
    assert_response :success
  end

  test "should get create" do
    get api_cards_create_url
    assert_response :success
  end

  test "should get update" do
    get api_cards_update_url
    assert_response :success
  end

  test "should get destroy" do
    get api_cards_destroy_url
    assert_response :success
  end

end
