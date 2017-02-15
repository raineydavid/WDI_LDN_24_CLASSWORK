class User < ApplicationRecord
  has_many :posts
  validates :username, presence: true, uniqueness: true

  def full_name
    "#{object.first_name} #{object.last_name}"
  end

  def number_of_posts
    posts.count
  end
end
