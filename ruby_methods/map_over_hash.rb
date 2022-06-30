def map_over_hash (hash)
    result = []
    for key,value in hash
        result<<yield(key, value)
    end
    result
end

p map_over_hash({ name: "Cersei", profession: "Queen", mood: "bitter" }) {|key, value|
    "Her #{key.to_s} is #{value}"} 
