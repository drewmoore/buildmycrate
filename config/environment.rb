require 'soundcloud'

# Load the Rails application.
require File.expand_path('../application', __FILE__)

# Initialize the Rails application.
Rails.application.initialize!

# API json output as camelCase, as opposed to default snake_case
Jbuilder.key_format camelize: :lower
