class User < ApplicationRecord
  has_secure_password
  has_many :posts
  validates :username, presence: true, uniqueness: true

  def full_name
    "#{first_name} #{last_name}"
  end

  def number_of_posts
    posts.count
  end

  before_create do |user|
    user.api_key = user.generate_api_key
  end

  # def generate_api_key
  #   loop do
  #     token = SecureRandom.base64.tr('+=', '123123')
  #     break token unless_exists api_key
  #   end
  # end
end
