class CreateCards < ActiveRecord::Migration[5.2]
  def change
    create_table :cards do |t|
      t.string :front_text
      t.string :back_text
      t.string :front_image
      t.string :back_image
      t.integer :deck_id, null: false
      t.integer :author_id, null: false

      t.timestamps
    end
    add_index :cards, :deck_id
    add_index :cards, :author_id
  end
end
