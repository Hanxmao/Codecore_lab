class Bones
    attr_accessor :size
    
    def initialize(a)
        @size = a
    end
    
end


class Dogs
    attr_accessor :colour, :type

    def initialize(colour,type)
        @colour,@type = colour,type
        @bonesArr = []
    end

    def add_bone(size)
        if @bonesArr.length>=3
            puts "I have too many bones."
        else
            @bonesArr<<size
        end
    end

    def eat_bone
        if @bonesArr.length>0
            eaten = @bonesArr.shift
            puts "yummy! I ate '#{eaten}' bone"
        else
            puts "there is no bone for me" 
        end
    end

end



b = Bones.new('big')
m = Bones.new('medium')
s = Bones.new('small')

bob = Dogs.new("brown", "Teddy")
bob.add_bone(b.size)
bob.add_bone(m.size)
bob.add_bone(s.size)
bob.add_bone(m.size)

bob.eat_bone
bob.eat_bone
bob.eat_bone
bob.eat_bone