class Person
  # reader only a getter
  # attr_reader :name
  # getter and setter
  attr_accessor :age, :name
  # attr_writer :age

  def initialize(name)
    @name = name
  end

end

# new and initialise paired together
bob = Person.new
bob.name ="Bob"
# at this point it is empty
# bob.set_name("Bob")
puts "Bob's name is #{bob.name}"
bob.age= 100
puts "Woah Bob is #{bob.age}"

p bob
