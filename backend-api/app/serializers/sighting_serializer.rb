class SightingSerializer < ActiveModel::Serializer
  attributes :id
  has_one :bird
end
