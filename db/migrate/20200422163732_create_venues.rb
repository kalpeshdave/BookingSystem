class CreateVenues < ActiveRecord::Migration[6.0]
  def change
    create_table :venues do |t|
      t.integer  :movie_id
      
      t.timestamps
    end
  end
end
