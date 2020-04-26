require 'rails_helper'

RSpec.describe Api::V1::SeatsController, type: :controller do
  describe "GET #index" do
    let(:movie) { Movie.create(title: "Test title!", summary: "This is a test description", year: 2018, genre: "Comedy") }
    let(:venue) { Venue.create(movie_id: movie.id) }

    before do
      venue.seats.create(('A'..'H').map{|alpha| (1..12).map {|num| {row: alpha, column: num} } }.flatten)
    end

    it "returns a success response" do
      get :index, params: { movie_id: movie.id }, format: :json
      expect(response).to be_successful
    end
  end
end