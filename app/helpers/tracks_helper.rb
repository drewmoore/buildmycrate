module TracksHelper
  # Format a hash's key names to be in camelCase. Returns copy as
  # indifferent hash. Used in json responses.
  def camelize_keys(input)
    return input unless input.is_a?(Hash)
    input.reduce({}.with_indifferent_access) do |memo, pair|
      memo.merge(
        Hash[pair.first.to_s.camelize(:lower), camelize_keys(pair.last)]
      )
    end
  end
end
