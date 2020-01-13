class Api::CardsController < ApplicationController
  def index
    @deck = Deck.find(params[:set_id])
    @cards = @deck.cards

  end

  def create
    @card = Card.new(card_params)
    @card.author_id = current_user.id
    @card.deck_id = params[:deck_id]
    if @card.save
      render '/api/cards/show'
    else
      render json: @card.errors.full_messages, status: 422
    end
  end

  def update
    @card = current_user.cards.find(params[:id])
    if @card.update_attributes(card_params)
      render 'api/cards/show'
    else
      render json: @card.errors.full_messages, status: 422
    end
  end

  def destroy
    @card = current_user.cards.find(params[:id])
  end

  def card_params
    params.require(:card).permit(:front_text, :back_text, :front_image, :back_image, :deck_id)
  end
end
