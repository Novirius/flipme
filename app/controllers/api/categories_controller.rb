class Api::CategoriesController < ApplicationController
    def index
        @categories = Category.all
    end
    # def show
    #     @category = Category.find(params[:id])
    #     if @category
    #         render 'api/categories/show'
    #     else
    #         render json: @category.errors.full_messages, status: 422
    #     end
    # end
    def create
        @category = Category.new(category_params)
        if @category.save
          render 'api/categories/show'
        else
          render json: @category.errors.full_messages, status: 422
        end
    end

    def category_params
        params.require(:category).permit(:name)
    end
end

#Decks by user
#Decks by category
#Decks by sub-category