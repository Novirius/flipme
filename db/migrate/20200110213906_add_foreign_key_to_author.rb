class AddForeignKeyToAuthor < ActiveRecord::Migration[5.2]
  def change
    drop_table :folders
  end
end
