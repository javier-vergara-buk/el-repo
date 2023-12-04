class Plan
  attr_accessor :name, :price

  def initialize(name, price)
    @name = name
    @price = price
  end

  # def hola
  #   puts 'Hola'
  # end
  #
  def calculate_price
    @price
  end
end

class Pack
  def initialize
    @plans = []
  end

  def add_plan(plan)
#    plan.hola
    @plans << plan
  end

  def calculate_price
    total_price = 0

    @plans.each do |plan|
      total_price += plan.calculate_price
    end

    total_price
  end
end
