class AddIndexesToPackages < ActiveRecord::Migration
  def change
    add_index :packages, :processor_id
    add_index :packages, :owner_id
  end
end
