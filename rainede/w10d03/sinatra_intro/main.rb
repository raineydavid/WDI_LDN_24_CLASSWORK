require 'sinatra'
require "sinatra/reloader" if development?

# express route
# app.get('/hi', (req,res) => {
#   # do something
# });

# sinatra route
get "/" do
  @title = "Homepage"
  erb :home
end

get "/hi" do
  "Hello World!"
end

get '/homepage' do
  "Hello World"
end

get "/friends/:name" do
  # puts params
"This friend's name is #{params[:name]} "
end

get "/friends/:name/:age" do
  # puts params
"This friend's name is #{params[:name]} and they are #{params[:age]} years old "
end

get "/friends/:first_name/:last_name/:age" do
  "This friend's name is #{params[:first_name]} #{params[:last_name]} and they are #{params[:age]} years old."
end
