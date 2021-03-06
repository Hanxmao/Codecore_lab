class ReviewsController < ApplicationController
    before_action :find_product
    before_action :authenticate_user!
    
    def create
        @review = Review.new(params.require(:review).permit(:body, :rating))
        @review.product= @product
        @review.user = current_user
        if @review.save
            redirect_to product_path(@product)
        else
            @reviews = @product.reviews.order(created_at: :desc)
        end
    end

    def destroy
        @review = Review.find params[:id]
        if can?(:crud, @review)
            @review.destroy
            redirect_to product_path(@product), notice: 'Review deleted'
        else
            redirect_to root_path, alert: 'Not authorized!'
        end
    end

    private
    def find_product
        @product = Product.find params[:product_id]
    end
end
