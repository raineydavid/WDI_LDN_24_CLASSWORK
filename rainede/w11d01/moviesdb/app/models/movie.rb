class Movie < ApplicationRecord
  belongs_to :director
  has_and_belongs_to_many :genres

  # Validations

  # Required Field
  validates :title, presence: true

  # Min/Max length
  validates :title, length: {minimum: 2}
  validates :title, length: {maximum: 2}
  #Both in one line
  validates :title, length: {in: 2..100}

  #Unique
  validates :title, uniqueness: true
end
