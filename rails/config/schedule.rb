# Instructions
# ============
#
# To update crontab file, execute
# whenever -w
#
# To clear the crontab file, execute
# whenever -c
#
# To view (and edit) the crontab file, execute
# crontab -e
set :environment, 'development'
set :output, {:error => "log/cron_error_log.log", :standard => "log/cron_log.log"}

every :day, at: '12:00 am' do
  rake 'send_reminder_email'
end
