class Book < ApplicationRecord
  belongs_to :author
  belongs_to :genre

  validates :title, :summary, presence: {message: "cannot be blank."}

end