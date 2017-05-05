module ApplicationHelper

  # TODO: delete after reactification
  def generate_id
    (rand() * (10 ** 10)).to_i
  end
end
