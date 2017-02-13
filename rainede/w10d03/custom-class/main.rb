require_relative "./models/caesar"

puts "What word do you want to enceypt?"
answer = gets.chomp
puts "The new word is #{Caesar.encrypt(answer)}"
