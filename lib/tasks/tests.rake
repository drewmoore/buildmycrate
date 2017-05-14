# Additional tests beyond Rails.

# Run tests for front-end app. Stop tests if error or failure.
raise "\n Front-End Tests Failed, yo!!! \n\n" unless system(%Q{ npm run test })
