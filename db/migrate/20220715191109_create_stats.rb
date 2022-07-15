class CreateStats < ActiveRecord::Migration[7.0]
  def change
    create_table :stats do |t|
      t.integer :hp
      t.integer :ac
      t.string :attack_mode
      t.string :damage_mod
      t.integer :movement
      t.string :spell_slots
      t.references :character, null: false, foreign_key: true

      t.timestamps
    end
  end
end
