class Movie < ApplicationRecord
  belongs_to :director
  has_and_belongs_to_many :genres

  # Validations

  # Required Field
  validates :title, presence: true

  # Min/Max length
  # Minimum
  validates :title, length: { minimum: 2 }
  # Maximum
  validates :title, length: { maximum: 100 }

  # Both in one line
  validates :title, length: { in: 2..100 }

  # Unique Value
  validates :title, uniqueness: true

end
