score = 0

puts "How many sides does a hexagon have?
1- five
2- six
3- seven

Enter the correct number: "

answer1 = gets.chomp
if answer1 == '2'
    score+=1
end

puts "What is the result for 2 / 2
1- one
2- two
3- zero

Enter the correct number: "

answer2 = gets.chomp
if answer2 == '1'
    score+=1
end

puts "What is the result for 2*2
1- two
2- three
3- four

Enter the correct number: "

answer3 = gets.chomp
if answer3 == '3'
    score+=1
end

percent= score.to_f/3 * 100
puts "You scored #{percent.floor}%, you got #{score} out of 3 questions correctly."

