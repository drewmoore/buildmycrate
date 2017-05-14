# Additional tests beyond Rails.

# Run Jest tests for react app. Stop tests if error or failure.
raise "\n Jest Tests Failed!!! \n\n" unless system(%Q{ npm run test })
