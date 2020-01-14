@cards.each do |card|
    json.set! card.id do
      json.extract! card, :id, :front_text, :back_text, :front_image, :back_image, :deck_id, :author_id
    end
end
  