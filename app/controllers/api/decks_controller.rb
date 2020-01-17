class Api::DecksController < ApplicationController
  def index
    if params[:user_id]
      user = User.find(params[:user_id])
      @decks = user.decks
      render :index
    elsif params[:category_id]
      category = Category.find(params[:category_id])
      @decks = category.decks
      render :index
    elsif params[:sub_category_id]
      sub_category = SubCategory.find(params[:sub_category_id])
      @decks = sub_category.decks
      render :index
    end
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

      @card1 = Card.new()
      @card1.author_id = current_user.id
      @card1.deck_id = @deck.id
      @card1.save
      
      @card2 = Card.new()
      @card2.author_id = current_user.id
      @card2.deck_id = @deck.id
      @card2.save

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
    @deck = current_user.decks.find(params[:id])
    @deck.destroy
  end

  def deck_params
    params.require(:deck).permit(:title, :sub_category_id, :author_id)
  end


end
