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
end

#Decks by user
#Decks by category
#Decks by sub-category