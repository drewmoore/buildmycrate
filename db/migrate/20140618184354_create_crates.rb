class CreateCrates < ActiveRecord::Migration
  def change
    create_table :crates do |t|

      t.timestamps
    end
  end
end
