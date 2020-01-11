class AddIndexToAuthorId < ActiveRecord::Migration[5.2]
  def change
    add_index :folders, :author_id
  end
end
