class Deletingdatecolumnfromdeals < ActiveRecord::Migration[7.0]
  def change
    remove_column :deals, :date_opened, :date
  end
end
