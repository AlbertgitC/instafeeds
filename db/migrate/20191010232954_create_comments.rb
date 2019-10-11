class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.text :body
      t.integer :user_id
      t.integer :feed_id

      t.timestamps
    end
    add_foreign_key :comments, :users
    add_foreign_key :comments, :feeds
  end
end
