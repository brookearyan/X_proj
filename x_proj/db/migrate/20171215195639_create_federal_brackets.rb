class CreateFederalBrackets < ActiveRecord::Migration[5.1]
  def change
    create_table :federal_brackets do |t|
      t.float :new_rate
      t.float :bracket_max
      t.float :initial_tax
    end
  end
end
