def pluck_method (arr, key)
    result=[]
    for hash in arr
        result << hash[key]
    end
    result
end

p pluck_method([{a:1}, {a:2}], :a)
p pluck_method([{ b: 2 }, { a: 4, b: 4 }, { a: 1 }, { c: 4 }], :a)
p pluck_method([{ b: 2 }, { a: 4, b: 4 }, { a: 1 }, { c: 4 }], :b)

