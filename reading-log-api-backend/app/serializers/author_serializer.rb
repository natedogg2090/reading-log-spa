class AuthorSerializer
  include FastJsonapi::ObjectSerializer
  attribute :name, :books
  has_many :books

end