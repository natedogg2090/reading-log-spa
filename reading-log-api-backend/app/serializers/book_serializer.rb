class BookSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :summary, :author
  belongs_to :author

end