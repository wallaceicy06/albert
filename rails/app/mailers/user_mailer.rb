class UserMailer < ApplicationMailer
  def new_package_email(user, package)
    @user = user
    @package = package
    mail to: @user.email, subject: "You have a package! (#{@package.barcode})"
  end

  def package_reminder_email(user)
    @user = user

    mail to: @user.email, subject: "REMINDER: You have packages awaiting pickup"
  end
end
