class CreateDeckJoinFolders < ActiveRecord::Migration[5.2]
  def change
    create_table :deck_join_folders do |t|
      t.integer :deck_id
      t.integer :folder_id

      t.timestamps
    end
    add_index :deck_join_folders, :deck_id
    add_index :deck_join_folders, :folder_id
  end
end
