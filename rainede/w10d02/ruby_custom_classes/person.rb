# class Person
#   # instance methods if they dont have the word self
#
#   def initialize(name)
#     @name = name
#   end
#   # def set_name(name)
#   #   puts "Setting a persons name"
#   #   @name = name
#   # end
#
#   def get_name
#     # puts "Returning a person's name"
#     @name
#   end
# end
#
# bob = Person.new
# # at this point it is empty
# bob.set_name("Bob")
# puts bob.get_name
# p bob

#
# JS
# obj.method(arguments) & block

# class Person
#   # instance methods if they dont have the word self
#
#   def initialize(name)
#     @name = name
#   end
#   # def set_name(name)
#   #   puts "Setting a persons name"
#   #   @name = name
#   # end
#
#   def name
#     # puts "Returning a person's name"
#     @name
#   end
# end
#
# # new and initialise paired together
# bob = Person.new("Bob")
# # at this point it is empty
# # bob.set_name("Bob")
# puts "Bob's name is #{bob.name}"
# p bob


class Person
  # instance methods if they dont have the word self

  def initialize(name)
    @name = name
  end
  # def set_name(name)
  #   puts "Setting a persons name"
  #   @name = name
  # end

  def name
    # puts "Returning a person's name"
    @name
  end

  def age=(age)
    # puts "Returning a person's name"
    @age = age
  end

  def age
    # puts "Returning a person's name"
    @age
  end
end

# new and initialise paired together
bob = Person.new("Bob")
# at this point it is empty
# bob.set_name("Bob")
puts "Bob's name is #{bob.name}"
bob.age=(29)
bob.age = 29
puts "Bob's age is #{bob.age}"

p bob
