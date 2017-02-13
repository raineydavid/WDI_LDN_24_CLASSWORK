class Caesar2
  def self.encrypt(word)
    words.chars.map{ |char| char.ord + 1  }.map(&:chr).join
  end
end

class Caesar

  attr_reader :encrypted

  def initialize(word)
    @original = word
    encrypt
  end

  def encrypt(word)
   @encrypted = @original.chars.map{ |char| char.ord + 1  }.map(&:chr).join
  end
end
