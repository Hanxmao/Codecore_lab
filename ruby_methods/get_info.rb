def get_user_info
    info = {}

    p "What's your first name"
    info["first_name"] = gets.chomp
    
    p "What's your lase name"
    info["last_name"] = gets.chomp
    
    p "Where is your city of birth"
    info["city_of_birth"] = gets.chomp
    
    p "How old are you"
    info["age"] = gets.chomp

end

p get_user_info