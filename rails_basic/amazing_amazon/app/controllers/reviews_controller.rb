class ReviewsController < ApplicationController
    before_action :find_product
    
    def create
        @review = Review.new(params.require(:review).permit(:body, :rating))
        @review.product= @product
        if @review.save
            redirect_to product_path(@product)
        else
            @reviews = @product.reviews.order(created_at: :desc)
        end
    end

    def destroy
        @review = Review.find params[:id]
        @review.destroy
        redirect_to product_path(@product)
    end

    private
    def find_product
        @product = Product.find params[:product_id]
    end
end
