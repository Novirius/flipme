class CreateFolders < ActiveRecord::Migration[5.2]
  def change
    create_table :folders do |t|
      t.string :title, null: false
      t.integer :author_id, null: false
      t.text :description
      t.timestamps
    end
    add_index :folders, :title
    add_index :folders, :author_id
  end
end
