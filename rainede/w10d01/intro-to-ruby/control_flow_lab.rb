answer_incorrect = true
while answer_incorrect
  puts "What is ( 1000 / 5)?"
  answer = gets.to_i;
  puts "Your answer is #{answer}"
case answer
when 1000/5
  answer_incorrect  = false
  puts "Yay! You Rockstar! Answer is indeed #{answer}"
else
  puts "Your answer is incorrect! Go again? yes/no"
    answer = gets.to_s;
      puts "Your reponse is #{answer}"
  case answer
  when "yes"
    puts "Good-bye!"
    exit
  when "no"
    puts "OK, we'll continue"
  else
    puts "That's an unknown answer"
  end
end

end
