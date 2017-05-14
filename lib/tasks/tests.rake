# Additional tests beyond Rails.

# Build front-end app. Stop tests if error or failure.
build_command = %Q{ NODE_ENV=test npm install }
raise "\n Front-End Build Failed, yo!!! \n\n" unless system(build_command)

# Run tests for front-end app. Stop tests if error or failure.
test_command = %Q{ NODE_ENV=test npm run test }
raise "\n Front-End Tests Failed, yo!!! \n\n" unless system(test_command)
