@folders.each do |folder|
    json.set! folder.id do
      json.extract! folder, :id, :title, :description, :author_id, :deck_ids
    end
end
  