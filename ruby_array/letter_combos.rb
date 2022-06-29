str = '123456'
arr = str.split('')
result = []
for i in 0..4
    temp = arr[i]+arr[i+1]
    result.push(temp)
end

p result