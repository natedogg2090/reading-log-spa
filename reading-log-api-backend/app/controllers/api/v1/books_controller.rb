class Api::V1::BooksController < ApplicationController
  def index
    books = Book.all

    render json: BookSerializer.new(books), status: 200
  end

  def show
    book = Book.find(params[:id])

    render json: BookSerializer.new(book), status: 200
  end

  def create
    book = Book.new(book_params)
    author = Author.find_or_create_by(:name => params[:author][:name])
    genre = Genre.find_or_create_by(:name => params[:genre][:name])

    book.author_id = author.id
    book.genre_id = genre.id

    if book.save
      render json: BookSerializer.new(book), status: 200
    else
      render json: {status: "error", message: "Please correct form errors."}
    end
  end

  def update
    book = Book.find(params[:id])
    book.update(book_params)

    render json: BookSerializer.new(book), status: 200
  end

  def destroy
    book = Book.find(params[:id])
    book.destroy

  end

  private

  def book_params
    params.require(:book).permit(:title, :summary, :author_id, :genre_id, :complete)
  end

end
