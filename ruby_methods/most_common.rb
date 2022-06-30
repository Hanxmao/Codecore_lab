def most_common_letter (str)
    arr = str.split('')
    counts = Hash.new(0)
    arr.each { |ele| counts[ele] += 1 }
    counts.each { |k, v| puts k if v == counts.values.max } 
end

most_common_letter("1111 monkeysasdbajbaksjblakjbfffffffffff on the wall")



