class Bird < ApplicationRecord
    has_many :sightings
    validates :name, :species, presence: true

end
