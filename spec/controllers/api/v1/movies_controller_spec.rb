require 'rails_helper'

RSpec.describe Api::V1::MoviesController, type: :controller do
  let(:valid_attributes) {
    { title: "Test title!", summary: "This is a test description", year: 2018, genre: "Comedy" }
  }

  describe "GET #index" do
    it "returns a success response" do
      Movie.create! valid_attributes
      get :index, format: :json
      expect(response).to be_successful
    end
  end
end