puts "Type in three things"

answer1 = gets.chomp
answer2 = gets.chomp
answer3 = gets.chomp
list = [answer1, answer2, answer3]
for a in 0..2
    for b in 0..2
        for c in 0..2
            puts "#{list[a]},#{list[b]},#{list[c]}"
        end
    end
end
