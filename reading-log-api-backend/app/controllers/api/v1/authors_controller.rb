class Api::V1::AuthorsController < ApplicationController
  def index
    @authors = Authors.all

    render json: @authors, status: 200
  end
end
