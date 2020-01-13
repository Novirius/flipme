class Api::DecksController < ApplicationController
  def index
    #decks by user
    #decks by category
    #decks by folder

  end

  def show
    @deck = Deck.find(params[:id])
    if @deck
      render 'api/decks/show'
    else
      render json: @deck.errors.full_messages, status: 422
    end
  end

  def create
    @deck = Deck.new(deck_params)
    @deck.author_id = current_user.id
    if @deck.save
      render 'api/decks/show'
    else
      render json: @deck.errors.full_messages, status: 422
    end
  end

  def update
    @deck = current_user.decks.find(params[:id])
    if @deck.update_attributes(deck_params)
      render 'api/decks/show'
    else
      render json: @deck.errors.full_messages, status: 422
    end
  end

  def destroy
  end

  def deck_params
    params.require(:deck).permit(:title, :sub_category_id)
  end


end
