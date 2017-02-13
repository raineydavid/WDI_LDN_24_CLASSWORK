require "sinatra"
require "sinatra/reloader" if development?

get "/" do
  @title = "Home"
  erb :home
end

get "/sports" do
  @title = "Sports"
  erb :sports
end

get "/weather" do
  @title = "Weather"
  erb :sports
end

get "/celebrity" do
  @title = "Celebrity"
  erb :celebrity
end

get "/politics" do
  @title = "Politics"
  erb :politics
end

get "/gossip" do
  @title ="Gossip"
  erb :gossip
end
get "/fashion" do
  @title = "fashion"
  erb :fashion
end

get "/science" do
  @title = "Science"
  erb :science
end


get "/cats" do
  @title = "cats"
  erb :cats
end

post "/navigate" do
  # puts "#{params[:destination]}"
  case params[:destination].downcase
  when "sports" then redirect to ("/sports")
  when "weather" then redirect to ("/weather")
  when "gossip" then redirect to ("/gossip")
  when "celebrity" then redirect to ("/celebrity")
  when "politics" then redirect to ("/politics")
  when "fashion" then redirect to ("/fashion")
  when "science" then redirect to ("/science")
  when "cats" then redirect to ("/cats")
  when "" then redirect to ("/")
  else
    @error = "Invalid page selected"
    erb :home
  end

end
