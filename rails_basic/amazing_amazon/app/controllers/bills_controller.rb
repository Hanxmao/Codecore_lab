class BillsController < ApplicationController
    def seperate
       

    end

    def bills_result

        @amount = params[:amount].to_f
        @taxes = params[:taxes].to_f
        @tips = params[:tips].to_f
        @people = params[:people].to_i
        @result = @amount * (1 + @taxes / 100 + @tips / 100) / @people
    end
end
