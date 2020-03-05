@decks.each do |deck|
    json.set! deck.id do
      json.extract! deck, :id, :title, :author_id, :card_ids, :folder_ids
      # json.cardIds deck.cards.map{ |card| card.id } #has to be an array of card-ids foir that deck
    end
end