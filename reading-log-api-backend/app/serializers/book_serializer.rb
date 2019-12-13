class BookSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :summary, :author, :complete
  belongs_to :author

end