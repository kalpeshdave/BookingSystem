class CreateSeats < ActiveRecord::Migration[6.0]
  def change
    create_table :seats do |t|
      t.string    :row
      t.integer   :column
      t.integer   :venue_id
      t.boolean   :is_available, default: false
      
      t.timestamps
    end
  end
end
