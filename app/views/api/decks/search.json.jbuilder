@decks.each do |deck|
    json.set! deck.id do
      json.extract! deck, :id, :title, :sub_category_id, :author_id, :card_ids, :folder_ids
    end
end