class Fixjoinstable < ActiveRecord::Migration[5.2]
  def change
    remove_index :deck_join_folders, :deck_id
    add_index :deck_join_folders, [:deck_id, :folder_id], unique: true
  end
end
