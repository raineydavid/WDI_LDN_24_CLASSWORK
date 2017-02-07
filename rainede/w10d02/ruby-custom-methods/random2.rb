# Pick 5



SELECTED_NUMBERS = []
LOWER_BOUND = 0
UPPER_BOUND = 100
HOW_MANY_NUMBERS = 5



# def pick_selected_numbers
#   HOW_MANY_NUMBERS.times do
#     SELECTED_NUMBERS << rand(LOWER_BOUND..UPPER_BOUND)
#   end
#   SELECTED_NUMBERS
# end

def pick_random_number
  rand(LOWER_BOUND..UPPER_BOUND)
end
def pick_selected_numbers
  HOW_MANY_NUMBERS.times {SELECTED_NUMBERS << pick_random_number}

  SELECTED_NUMBERS
end

# def is_number_present?
#   SELECTED_NUMBERS.include? answer
# end

def is_number_present?(answer)
  SELECTED_NUMBERS.include? answer
end

# Use our function to push 5 random bumbers into an array
chosen_numbers = pick_selected_numbers

# Ask the user for a guess
puts "Choose a number between #{LOWER_BOUND} and #{UPPER_BOUND}:"
answer = gets.to_i

# Check whether the guess is included in the array of numbers
# if is_number_present?(answer)
#   puts "You're right"
# else
#   puts "You're wrong. The numbers chosen were #{chosen_numbers}"
# end

if is_number_present?(answer)
  puts "You're right"
else
  puts "You're wrong. The numbers chosen were #{SELECTED_NUMBERS.join(",")}"
end
