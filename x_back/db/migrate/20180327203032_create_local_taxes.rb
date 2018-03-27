class CreateLocalTaxes < ActiveRecord::Migration[5.1]
  def change
    create_table :local_taxes do |t|
      t.string :name
      t.string :city
      t.integer :tax_rate
      t.timestamps
    end
  end
end
