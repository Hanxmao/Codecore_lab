target = {}
for i in 1..10000
    target[:i]=i
end

random_num1 = rand(0..10000)
random_num2 = rand(0..10000)
target[:random_num1] = random_num2

values = target.values.sort
result = values.uniq.sort

for i in 0..9999
    if values[:i]!=result[:i]
        p values[:i]
    end  
end

