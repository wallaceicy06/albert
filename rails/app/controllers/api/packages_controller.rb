class Api::PackagesController < ApplicationController
  def show
    @package = Package.find(params[:id])

    if @package
      render json: @package, status: :ok
    else
      render json: {}, status: :not_found
    end
  end

  def index
    render json: Package.all
  end

  def create
    @package = Package.new(package_params)

    temp_infer_attributes

    if @package.save
      render json: @package, status: :created
    else
      render json: @package.errors, status: :unprocessable_entity
    end
  end

  private

    def temp_infer_attributes
      @package.processor = @package.owner
      @package.time_checkin = Time.now
    end

    def package_params
      params.require(:package).permit(:barcode, :owner_id)
    end

end
