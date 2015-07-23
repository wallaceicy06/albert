class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :username
      t.boolean :admin, default: false
      t.string :email

      t.timestamps null: false
    end
  end
end