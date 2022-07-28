class AddStatsToCharacters < ActiveRecord::Migration[7.0]
  def change
    add_column :characters, :hp, :integer
    add_column :characters, :ac, :integer
    add_column :characters, :atk_mod, :string
    add_column :characters, :dmg_mod, :string
    add_column :characters, :spell_slots, :string
    add_column :characters, :movement, :integer
  end
end
