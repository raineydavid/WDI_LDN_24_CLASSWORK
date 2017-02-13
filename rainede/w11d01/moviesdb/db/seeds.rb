# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Director.destroy_all
Movie.destroy_all

Director.create([
  {
    name: "Steven Spielberg",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Steven_Spielberg_Cannes_2013_3.jpg"
  },
  {
    name: "Quentin Tarantino",
    image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgyMjI3ODA3Nl5BMl5BanBnXkFtZTcwNzY2MDYxOQ@@._V1_UX214_CR0,0,214,317_AL_.jpg"
  }
])

Movie.create([
  {
    title: "E.T",
    poster: "http://img.moviepostershop.com/et--the-extra-terrestrial-movie-poster-1982-1020141470.jpg",
    director_id: 1
  },
  {
    title: "Jaws",
    poster: "https://www.movieposter.com/posters/archive/main/37/MPW-18721",
    director_id: 1
  },
  {
    title: "Django Unchained",
    poster: "https://upload.wikimedia.org/wikipedia/en/8/8b/Django_Unchained_Poster.jpg",
    director_id: 2
  }
])
 
