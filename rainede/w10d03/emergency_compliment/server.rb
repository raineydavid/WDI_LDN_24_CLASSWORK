require "sinatra"
require "sinatra/reloader" if development?

class Compliment
  attr_reader :rand_color, :rand_compliment
  @compliments = [
    "Your instructors love you",
    "High five = ^5",
    "Is it Ruby Tuesday yet?",
    "It's almost beer o'clock",
    "The Force is strong with you"
  ]
    @colors =["#FFBF00", "#0080FF", "#01DF3A", "#FF0080"]
    def random_element(element)
      element[rand(element.length)]
    end
  def initialize
    @rand_color =random_element(@colors)
    @rand_compliment =random_element(@compliment)
  end


end

get "/" do
  dummy = Compliment.new()
  @title = "Celebrity"
  erb :compliment
end

get "/name" do
    dummy = Compliment.new()
  @title = "Celebrity"
  erb :compliment
end
