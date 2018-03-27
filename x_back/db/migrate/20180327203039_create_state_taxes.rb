class CreateStateTaxes < ActiveRecord::Migration[5.1]
  def change
    create_table :state_taxes do |t|
      t.string :marital_status
      t.integer :greater_than
      t.integer :last_bracket
      t.integer :initial_tax
      t.integer :new_rate
      t.timestamps
    end
  end
end
