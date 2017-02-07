class Superhero
  attr_accessor :name, :powers, :alias, :nemesis
  attr_reader :name

  def initialize(name)
    @name =name
  end


end

popeye = Superhero.new

puts popeye.name = "Popeye"
puts popeye.powers = "Superhuman strength"

puts "I am a Superhero and my name is #{popeye.name} and I have #{popeye.powers}"
