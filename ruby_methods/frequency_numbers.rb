
array = [1, 2, 3, 4, 4, 4, 2, 3, 3, 3]

def frequency_of_numbers (arr)
    arr.each_with_object(Hash.new(0)) do |item, hash|
        hash[item] += 1
    end
end




p frequency_of_numbers(array)