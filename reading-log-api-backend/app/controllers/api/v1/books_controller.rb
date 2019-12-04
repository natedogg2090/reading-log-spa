class Api::V1::BooksController < ApplicationController
  def index
    @books = Book.all

    render json: @books, include: [:author], status: 200
  end

  def show
    @book = Book.find(params[:id])

    render json: @book, status: 200
  end

  def create
    binding.pry
    @book = Book.new(book_params)

    # author.find_or_create_by || first_or_create_by
    # genre.find_or_create_by

    if @book.save
      render json: @book, status: 200
    end
  end

  private

  def book_params
    params.require(:book).permit(:title, :summary)
  end

end
