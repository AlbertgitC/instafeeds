class ChangeFollowsCol < ActiveRecord::Migration[5.2]
  def change
    change_table :follows do |t|
      t.rename :user_id, :followed_id
    end
  end
end
