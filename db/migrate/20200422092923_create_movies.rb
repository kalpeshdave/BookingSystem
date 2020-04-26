class CreateMovies < ActiveRecord::Migration[6.0]
  def change
    create_table :movies do |t|
      t.string  :title
      t.text    :summary
      t.integer :year
      t.string  :genre
      t.string  :imdb_info
      t.string  :image_url

      t.timestamps
    end
  end
end
