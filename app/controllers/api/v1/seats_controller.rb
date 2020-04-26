class Api::V1::SeatsController < Api::V1::ApiController
  def index
    respond_with Venue.find_by(movie_id: params[:movie_id]).seats.available
  end
end