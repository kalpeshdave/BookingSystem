class Venue < ApplicationRecord
  has_many :seats
  belongs_to :movie
end
