class CreateLeads < ActiveRecord::Migration[7.0]
  def change
    create_table :leads do |t|
      t.string :full_name
      t.string :email
      t.string :phone_number

      t.timestamps
    end
  end
end
