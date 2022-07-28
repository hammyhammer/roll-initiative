class CreateCharacters < ActiveRecord::Migration[7.0]
  def change
    create_table :characters do |t|
      t.string :name
      t.boolean :isPC
      t.integer :hp
      t.integer :ac
      t.string :atk_mod
      t.string :dmg_mod
      t.string :movement
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
