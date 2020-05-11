class Api::DecksController < ApplicationController
  def index
    if params[:user_id]
      user = User.find(params[:user_id])
      @decks = user.decks
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

  #Search for decks where either the title of the deck or the card front/back text contains the search query
  def search
    search = "%#{params[:query].downcase}%"
    @decks = Deck.joins(:cards)
      .where("lower(decks.title) LIKE ? OR lower(cards.front_text) LIKE ? OR lower(cards.back_text) LIKE ?", search, search, search)
      .select(:id, :title, :author_id)
      .distinct
    render 'api/decks/search'
  end

  #Find the last four of the user's cards
  def latest
    @decks = current_user.decks
            .order(created_at: :desc)
            .limit(4)
    render 'api/decks/show'
  end

  def deck_params
    params.require(:deck).permit(:title, :author_id)
  end


end
