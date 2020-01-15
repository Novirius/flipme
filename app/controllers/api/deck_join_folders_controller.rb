class Api::DeckJoinFoldersController < ApplicationController
    def create
        @join = DeckJoinFolder.new(join_params)
    end

    def destroy
        
    end

    def join_params
        params.require(:deck_join_folder).permit(:deck_id, :folder_id)
    end
end
