class Movie < ApplicationRecord
  validates :title, :summary, :year, :genre, presence: true

  has_many :venues
end
