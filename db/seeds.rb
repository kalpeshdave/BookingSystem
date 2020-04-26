# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

movie1 = Movie.create!(
          title: "Joker",
          image_url: "https://i.imgur.com/po7UezG.jpg",
          summary: "This path brings him face-to-face with his alter-ego: the Joker.",
          year: 2019,
          genre: 'Crime',
          imdb_info: 'https://www.imdb.com/title/tt7286456/?ref_=hm_fanfav_tt_4_pd_fp1'
          )

movie2 = Movie.create!(
          title: "Parasite", 
          image_url: "https://i.imgur.com/VqUi1sw.jpg",
          summary: "A poor family, the Kims, con their way into becoming the servants of a rich family, the Parks. \
                   But their easy life gets complicated when their deception is threatened with exposure.",
          year: 2019,
          genre: 'Comedy',
          imdb_info: 'https://www.imdb.com/title/tt6751668/?ref_=hm_fanfav_tt_2_pd_fp1'
          )

movie3 = Movie.create!(
          title: "La La Land", 
          image_url: "https://i.imgur.com/po7UezG.jpg",
          summary: "A poor family, the Kims, con their way into becoming the servants of a rich family, the Parks. \
                   But their easy life gets complicated when their deception is threatened with exposure.",
          year: 2019,
          genre: 'Drama/Romance',
          imdb_info: 'https://www.imdb.com/title/tt6751668/?ref_=hm_fanfav_tt_2_pd_fp1'
          )

movie4 = Movie.create!(
          title: "Paterson", 
          image_url: "https://i.imgur.com/pE0C9E0.jpg",
          summary: "A poor family, the Kims, con their way into becoming the servants of a rich family, the Parks. \
                   But their easy life gets complicated when their deception is threatened with exposure.",
          year: 2019,
          genre: 'Drama/Comedy',
          imdb_info: 'https://www.imdb.com/title/tt6751668/?ref_=hm_fanfav_tt_2_pd_fp1'
          )


venue = Venue.create(movie_id: movie1.id)
venue.seats.create(('A'..'H').map{|alpha| (1..12).map {|num| {row: alpha, column: num} } }.flatten)