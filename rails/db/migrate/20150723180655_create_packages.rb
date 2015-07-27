class CreatePackages < ActiveRecord::Migration
  def change
    create_table :packages do |t|
      t.datetime :time_checkin
      t.boolean :picked_up, default: false
      t.integer :barcode
      t.references :processor
      t.references :owner

      t.timestamps null: false
    end
  end
end
