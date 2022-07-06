class Animal 
    attr_accessor :name, :color

    def initialize(name,color)
        @name, @color= name, color
    end

    def eat 
        puts "I'm eating."
    end

    def walk
        puts "I'm walking"
    end
end

class Dog < Animal
    def bark
        "woof"
    end

    def eat
        super
        puts "Bones are yummy!"
    end
end

class Cat < Animal
    def eat
        puts "Fish is yummy!"
    end
end

d = Dog.new('phoebe','black&white')

puts "My dog is #{d.name}, and her color is #{d.color}"
d.eat
d.walk
d.bark

c = Cat.new('Unknow', 'colorful')

c.eat
c.walk

