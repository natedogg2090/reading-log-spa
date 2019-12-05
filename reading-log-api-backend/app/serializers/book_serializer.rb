class BookSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :summary
  belongs_to :author

end