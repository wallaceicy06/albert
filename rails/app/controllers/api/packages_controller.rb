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

    # change this to use the current user, once that crap is implemented
    temp_infer_attributes

    if @package.save
      render json: @package, status: :created
    else
      render json: @package.errors, status: :unprocessable_entity
    end
  end

  def update
    @package = Package.find(params[:id])

    if @package.update_attributes(package_params)
      render json: @package, status: :ok
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
      params.require(:package).permit(:barcode, :owner_id, :picked_up)
    end

end
