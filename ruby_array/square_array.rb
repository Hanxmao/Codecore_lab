arr =  [[2,3,4], [5,6,7], [6,7,8]]

for inner in arr  
    inner.map!{|x|x**2}
end

p arr

