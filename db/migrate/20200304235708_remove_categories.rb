class RemoveCategories < ActiveRecord::Migration[5.2]
  def change
    remove_column :decks, :sub_category_id
  end
end