class Api::SubCategoriesController < ApplicationController
    def create
        @sub_category = SubCategory.new(sub_category_params)
        if @sub_category.save
          render 'api/sub_categories/show'
        else
          render json: @sub_category.errors.full_messages, status: 422
        end
    end

    def sub_category_params
        params.require(:sub_category).permit(:name, :category_id)
    end
end
