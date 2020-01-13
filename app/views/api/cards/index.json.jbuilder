@cards.each do |card|
    json.set! card.id do
      json.extract! card, :id, :title, :sub_category_id, :author_id
    end
end
  