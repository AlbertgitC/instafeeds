class CreateFeeds < ActiveRecord::Migration[5.2]
  def change
    create_table :feeds do |t|
      t.text :body
      t.integer :user_id, null: false

      t.timestamps
    end
    add_foreign_key :feeds, :users
    add_index :feeds, :user_id
  end
end
