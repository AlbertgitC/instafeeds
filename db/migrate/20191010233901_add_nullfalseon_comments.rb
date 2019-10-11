class AddNullfalseonComments < ActiveRecord::Migration[5.2]
  def change
    change_column_null :comments, :body, false
    change_column_null :comments, :user_id, false
    change_column_null :comments, :feed_id, false
  end
end
