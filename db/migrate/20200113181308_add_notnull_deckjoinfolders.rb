class AddNotnullDeckjoinfolders < ActiveRecord::Migration[5.2]
  def change
    change_column_null :deck_join_folders, :deck_id, false
    change_column_null :deck_join_folders, :folder_id, false
  end
end
