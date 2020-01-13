class CreateSubCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :sub_categories do |t|
      t.string :name, null: false
      t.integer :category_id, null: false

      t.timestamps
    end
    change_column_null :categories, :name, false
    add_index :sub_categories, :name
    add_index :sub_categories, :category_id
  end
end
