class Api::PackagesController < ApplicationController
  def index
    render json: Packages.all
  end

  def create
    @package = Package.new(package_params)

    if @package.save
      render json: @package, status: :created
    else
      render json: @package.errors, status: :unprocessable_entity
    end
  end

  private

    def package_params
      params.require(:package).permit(:time_checkin, :barcode, :processor, :owner)
    end
end
