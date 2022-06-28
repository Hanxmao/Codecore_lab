prime_list = [2]

num = 3
prime_flag = true
while num < 100
    for i in 2..num
        if num % i != 0
            prime_flag=false
        end        
    if prime_flag == true
         prime_list.push(num)
    end
    end
    num+=1
end

puts "give me a number"
result = gets.chomp
puts "first #{result} prime numbers are:"
for i in 0...(result.to_i)
    puts prime_list[i]
end