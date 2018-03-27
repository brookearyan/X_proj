class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :name
      t.decimal :income
      t.string :marital_status
      t.string :city
      t.string :state
      t.string :zip_code
      t.timestamps
    end
  end
end
 #JOIN TABLE OF USER IDs AND TAX BRACKET IDs?
