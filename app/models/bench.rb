class Bench < ActiveRecord::Base
  validates :description, :lat, :lng, presence: true;

  def self.in_bounds(bounds)
    self.where(lat: bounds["southWest"]['lat']..bounds["northEast"]["lat"])
        .where(lng: bounds["southWest"]['lng']..bounds["northEast"]["lng"])
  end
end
