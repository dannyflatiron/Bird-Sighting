class Sighting < ApplicationRecord
  belongs_to :bird
  validates :date, presence: true

end
