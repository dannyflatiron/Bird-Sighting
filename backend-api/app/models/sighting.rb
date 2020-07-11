class Sighting < ApplicationRecord
  belongs_to :bird
  validates :date, presence: true
  validate do
    sighting_valid?
  end
  
  
  private 

  def sighting_valid?
    if self.date == false
      self.errors.add(:invalid, "Please submit a date")
    end
  end

end
