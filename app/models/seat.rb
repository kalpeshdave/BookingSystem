class Seat < ApplicationRecord
  scope :available, -> { where(is_available: true).order(:row) }
end
