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
bird_f = Bird.create(name: "Bushtit", species: "Psaltriparus minimus")
bird_g = Bird.create(name: "Grackle", species: "Quiscalus Quiscula")
bird_h = Bird.create(name: "Snow Bunting", species: "Plectrophenax nivalis")
bird_i = Bird.create(name: "Brant", species: "Branta bernicla")
bird_j = Bird.create(name: "Double-crested Cormorant", species: "Phalacrocorax auritus")
bird_k = Bird.create(name: "Common Gallinule", species: "Gallinula galeata")
bird_l = Bird.create(name: "Western Gull", species: "Larus occidentalis")
bird_m = Bird.create(name: "Red-shouldered Hawk", species: "Buteo lineatus")
bird_n = Bird.create(name: "Black-crowned Night-Heron", species: "Nycticorax nycticorax")
bird_o = Bird.create(name: "Anna’s Hummingbird", species: "Calypte anna")
bird_p = Bird.create(name: "Rufous Hummingbird", species: "Selasphorus rufus")

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