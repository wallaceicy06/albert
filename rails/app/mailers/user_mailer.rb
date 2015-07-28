class UserMailer < ApplicationMailer
  def new_package_email(user, package)
    @user = user
    @package = package
    mail to: @user.email, subject: "You have a new package (#{@package.barcode})"
  end
end
