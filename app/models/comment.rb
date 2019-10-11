# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  body       :text             not null
#  user_id    :integer          not null
#  feed_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord
  validates :body, :user_id, :feed_id, presence: true

  belongs_to :user,
    class_name: "User",
    foreign_key: :user_id

  belongs_to :feed,
    class_name: "Feed",
    foreign_key: :feed_id

  has_many :likes, :as => :likeable

end
