class SightingSerializer < ActiveModel::Serializer
  attributes :id, :date, :bird_id
  belongs_to :bird
end
