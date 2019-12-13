class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.string :title
      t.text :summary
      t.boolean :complete, default: false
      t.belongs_to :author
      t.belongs_to :genre
      
      t.timestamps
    end
  end
end
