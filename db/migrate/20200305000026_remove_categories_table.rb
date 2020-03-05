class RemoveCategoriesTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :categories
    drop_table :sub_categories
  end
end
