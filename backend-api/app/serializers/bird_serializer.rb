class BirdSerializer < ActiveModel::Serializer
  attributes :id, :name, :species
  has_many :sightings
end
