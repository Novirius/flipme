class Api::FoldersController < ApplicationController
    def index
        @folders = current_user.folders.all
        render 'api/folders/index'
    end

    def create
        @folder = Folder.new(folder_params)
        if @folder.save
            render 'api/folders/show'
        else
            render json: @folder.errors.full_messages, status: 422
        end
    end

    def update
        @folder = current_user.folders.find(params[:id])
        if @folder.update_attributes(folder_params)
            render '/api/folders/show'
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def destroy
        @folder = Folder.find(params[:id])
        @folder.destroy
    end

    private 

    def folder_params
        params.require(:folder).permit(:title, :description)
    end
end
