class DropPacksTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :packs
  end
end
