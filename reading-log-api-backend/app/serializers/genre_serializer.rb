class GenreSerializer
  include FastJsonapi::ObjectSerializer
  attribute :name, :authors, :books
  has_many :books
  has_many :authors, through: :books

end