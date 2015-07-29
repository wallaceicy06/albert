desc 'Send reminder emails'
task send_reminder_email: :environment do
  User.all.each do |user|
    if user.has_new_packages?
      puts user.first_name
      UserMailer.package_reminder_email(user).deliver_later
    end
  end
end

