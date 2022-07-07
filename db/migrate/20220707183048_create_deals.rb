class CreateDeals < ActiveRecord::Migration[7.0]
  def change
    create_table :deals do |t|
      t.string :client_name
      t.string :client_email
      t.decimal :yearly_income
      t.decimal :loan_amount
      t.string :comment
      t.date :date_opened
      t.references :employee, null: false, foreign_key: true
      t.references :lead, null: false, foreign_key: true

      t.timestamps
    end
  end
end
