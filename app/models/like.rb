# == Schema Information
#
# Table name: likes
#
#  id            :integer          not null, primary key
#  likeable_id   :integer          not null
#  likeable_type :string           not null
#  user_id       :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Like < ApplicationRecord
  belongs_to :likeable, 
    :polymorphic => true
  belongs_to :user,
    class_name: "User",
    foreign_key: :user_id 
end
