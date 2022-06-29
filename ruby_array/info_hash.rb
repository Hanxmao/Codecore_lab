info = {}

p "What's your first name"
info[:first_name] = gets.chomp

p "What's your lase name"
info[:last_name] = gets.chomp

p "Where is your city of birth"
info[:live] = gets.chomp

p "How old are you"
info[:age] = gets.chomp


p "Your first name is #{info[:first_name]}.","Your last name is #{info[:last_name]}.","Your city of birth is #{info[:live]}.","Your age is #{info[:age]}."