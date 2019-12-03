class Api::V1::AuthorsController < ApplicationController
  def index
    @authors = Author.all

    render json: @authors, status: 200
  end
end
