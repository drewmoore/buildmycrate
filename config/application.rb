require File.expand_path('../boot', __FILE__)

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module BuildmycrateSandbox
  class Application < Rails::Application
    config.serve_static_assets = true
    # Transpile es6 and react assets prior to asset compilation.
    config.browserify_rails.commandline_options = '-t [babelify]'
  end
end
