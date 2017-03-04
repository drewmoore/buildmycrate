module TracksHelper
  # TODO: test
  def camelize_keys(input)
    return input unless input.is_a?(Hash)
    input.reduce({}) do |memo, pair|
      memo.merge(
        Hash[pair.first.to_s.camelize(:lower), camelize_keys(pair.last)]
      )
    end
  end
end
