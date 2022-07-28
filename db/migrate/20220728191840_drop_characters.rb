class DropCharacters < ActiveRecord::Migration[7.0]
  def change
    drop_table :characters
  end
end
