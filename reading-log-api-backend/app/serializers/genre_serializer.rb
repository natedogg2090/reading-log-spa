class GenreSerializer
  include FastJsonapi::ObjectSerializer
  attribute :name, :author, :books
  has_many :books
  has_many :authors, through: :books

end