class Api::V1::BooksController < ApplicationController
  def index
    @books = Book.all

    render json: @books, status: 200
  end

  def show
    @book = Book.find(params[:id])

    render json: @book, status: 200
  end

  def create
    @book = Book.new(book_params)

    if @book.save
      render json: @book, status: 200
    end
  end

end
