class FizzBuzz 
    attr_accessor :first_number, :second_number
    
    def initialize(first_number, second_number)
        @first_number,@second_number =first_number,second_number
    end

    def run
        for i in 1..100
            if (i % first_number == 0) && (i % second_number == 0)
                print 'fizzbuzz, '
            elsif i % first_number == 0
                print 'fizz, ' 
            elsif i % second_number == 0
                print 'buzz, ' 
            else
                p "#{i}, "
            end
        end
    end
end

a = FizzBuzz.new(2,3)
a.first_number=3
a.second_number=4
a.run
