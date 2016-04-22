# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Bench.create!(description: "First Bench", lat: 37.796681, lng: -122.413382)
Bench.create!(description: "Second Bench", lat: 37.788101, lng: -122.440118)
Bench.create!(description: "Third Bench", lat: 37.780029, lng: -122.480330)
Bench.create!(description: "Fourth Bench", lat: 37.754789, lng: -122.491660)

# 37.796681, -122.413382
# 37.788101, -122.440118
# 37.780029, -122.480330
# 37.754789, -122.491660
