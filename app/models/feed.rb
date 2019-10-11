# == Schema Information
#
# Table name: feeds
#
#  id         :integer          not null, primary key
#  body       :text
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Feed < ApplicationRecord
  validates :user_id, presence: true

  belongs_to :user,
    class_name: "User",
    foreign_key: :user_id

  has_many :comments,
    class_name: "Comment",
    foreign_key: :feed_id

  has_many :likes, :as => :likeable

end
