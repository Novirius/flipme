@folders.each do |folder|
    json.set! folder.id do
      json.extract! :id, :title, :description, :author_id
    end
end
  