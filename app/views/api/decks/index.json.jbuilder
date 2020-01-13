@decks.each do |deck|
    json.set! deck.id do
      json.extract! deck, :id, :title, :sub_category_id, :author_id
    end
end
  