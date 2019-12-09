class Api::V1::AuthorsController < ApplicationController
  def index
    authors = Author.all

    render json: AuthorSerializer.new(authors), status: 200
  end

  def show
    author = Author.find(params[:id])

    render json: AuthorSerializer.new(author), status: 200
  end
end
