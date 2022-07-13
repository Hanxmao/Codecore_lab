class ProductsController < ApplicationController

    #===============callback==================

    before_action :find_product, only: [:show, :update, :edit, :destroy]
    before_action :authenticate_user!, except: [:index, :show]


    #===============create=========================   
    def new
        @product = Product.new
    end

    def create
        @product = Product.new(params_product)
        @product.user = current_user
        if @product.save
            redirect_to product_path(@product)
        else
            render :new
        end
    end

    #=================read====================
    def index
        @products = Product.order(created_at: :desc)
    end

    def show
        @reviews = @product.reviews.order(created_at: :desc)
        @review = Review.new
    end

    #===============delete==================
    def destroy
        @product.destroy
        redirect_to products_path
    end

    #==================update==================
    def edit

    end

    def update
        if @product.update(params_product)
            redirect_to product_path(@product)
        else
            render :edit
        end

    end

#===================private ===================
    private

    def params_product
        params.require(:product).permit(:title, :description, :price)
    end

    def find_product
        @product = Product.find params[:id]
    end
end
