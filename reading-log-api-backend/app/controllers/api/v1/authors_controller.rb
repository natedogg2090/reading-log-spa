class Api::V1::AuthorsController < ApplicationController
  def index
    authors = Author.all

    render json: AuthorSerializer.new(authors), status: 200
  end
end
