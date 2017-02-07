#
# Use def (Ruby) instead of function (JS)
# Ruby methods always return the last line

# def say_hello
#   1+1
#   10 *4
#  [1,2,3,4].map{|n| n + 5}
# puts "hello"
# end
#
# puts say_hello
# # function sayHello(){
# #   return "Hello"
# # }

# const a = sayHello()

# def say_hello name
#   puts "hello #{name}"
# end
#
# puts say_hello "Alex"


# def say_hello name
#   puts "hello #{name}"
# end
#
# puts "what is your name?"
# name = gets.chomp
# puts "Welcome #{say_hello name}"

# puts "what is your name?"
# puts "Welcome #{say_hello gets.chomp}"

# Default argument
# def say_hello name = "Alex"
#   puts "hello #{name}"
# end
#
# puts say_hello "Jane"
# puts say_hello

# def say_hello name = "Alex"
#   puts "hello #{name}"
# end
#

# def say_hello name, name2
#   "Mr. #{name}, #{name2}"
# end
#
# puts say_hello "Alex", "Rane"

# def say_hello name, name2
#   ["Mr. #{name}, Mr #{name2}"]
# end
#
# a= say_hello "Alex", "Rane"
# puts a

# splat argument - also available in ES6 as a Spread operator
# def say_hello *names
#   puts names
# end
#
# puts say_hello "Alex", "Rane", "Nat"

# def say_hello a,b,*names
#   puts "here are the arguments"
#   puts a,b,names
#   p a,b,names
# end
#
# puts say_hello "Alex", "Rane", "Nat", "Alfredo"


# def test
#   puts "I'm here in the method ,, Let's see how many students we can break"
# yield
# puts "Now I'm here ..."
# yield
# end
#
#
# test { puts "I'm now in the block .. where am I?"}

# Function to take an array, loop through using each, inside put in yielded version which will jump through block
# def custom_map(array)
#   output = []
#   array.each {|e| output <<yield(e)}
#   output
# end
#
# puts custom_map([1,2,3]){|n| n +10}
# puts custom_map([1,2,3]){|n| n +30}
# puts custom_map([1,2,3]){|n| n +40}
#
# def custom_map(array)
#   output = []
#   array.each {|e| output <<yield(e=10)}
#   output
# end
#
# puts custom_map([1,2,3]){|n| n +10}
# puts custom_map([1,2,3]){|n| n +30}
# puts custom_map([1,2,3]){|n| n +40}

# def custom_map(array)
#   output = []
#   array.each {|e| output <<yield(e,f)}
#   output
# end
#
# puts custom_map([1,2,3]){|n,k| n +10}
# puts custom_map([1,2,3]){|n| n +30}
# puts custom_map([1,2,3]){|n| n +40}

def hello
  "words"
end

def say_something arg
  arg.upcase
end
 # same
puts say_something hello
puts say_something hello()
