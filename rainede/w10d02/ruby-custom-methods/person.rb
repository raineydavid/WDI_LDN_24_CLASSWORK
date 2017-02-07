# constructor function in JS is similar to a class in Ruby

class Person
  def talk words
    "I say #{words}"
  end

  def self.shout
    "SHOUT"
  end
end

a = Person.new
puts a.talk('Hello')
puts a.SHOUT
