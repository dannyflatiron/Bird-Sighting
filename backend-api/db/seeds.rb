# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

bird_a = Bird.create(name: "Black-Capped Chickadee", species: "Poecile Atricapillus")
bird_b = Bird.create(name: "Grackle", species: "Quiscalus Quiscula")
bird_c = Bird.create(name: "Common Starling", species: "Sturnus Vulgaris")
bird_d = Bird.create(name: "Mourning Dove", species: "Zenaida Macroura")
bird_e = Bird.create(name: "Black-Capped Chickadee", species: "Poecile Atricapillus")
# bird_f = Bird.create(name: "Grackle", species: "Quiscalus Quiscula")
# bird_g = Bird.create(name: "Common Starling", species: "Sturnus Vulgaris")
# bird_h = Bird.create(name: "Mourning Dove", species: "Zenaida Macroura")

sighting_a = Sighting.create(bird: bird_a, date: "2007-11-19")
sighting_b = Sighting.create(bird: bird_b, date: "2007-12-9")
sighting_c = Sighting.create(bird: bird_c, date: "2007-1-1")
sighting_d = Sighting.create(bird: bird_d, date: "2007-10-21")
sighting_e = Sighting.create(bird: bird_a, date: "2007-5-19")
sighting_f = Sighting.create(bird: bird_a, date: "2007-3-12")
sighting_g = Sighting.create(bird: bird_a, date: "2007-12-12")
sighting_h = Sighting.create(bird: bird_b, date: "2007-2-19")
sighting_i = Sighting.create(bird: bird_b, date: "2007-5-19")
sighting_j = Sighting.create(bird: bird_b, date: "2007-3-12")
sighting_k = Sighting.create(bird: bird_b, date: "2007-12-12")
sighting_l = Sighting.create(bird: bird_b, date: "2007-2-19")