def reduce (arr,init)
    total=init
    for ele in arr
    total = yield(total,ele)
    end
    total
end

p reduce([1, 2, 3, 4, 5, 6], 0) { |total, v| total + v }

