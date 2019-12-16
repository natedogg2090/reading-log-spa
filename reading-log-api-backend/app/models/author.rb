class Author < ApplicationRecord
  has_many :books
  has_many :genres, through: :books

  validates :name, presence: true
  
end
