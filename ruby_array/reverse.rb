# p "type in sth"
# result = gets.chomp
# arr = result.split('').reverse.join
# p arr

p "type in sth"
str = gets.chomp
arr = str.split('')
result = ''
for i in 0..arr.length-1 
    result+= arr[arr.length-1-i]
end
p result


# pop method could work too
