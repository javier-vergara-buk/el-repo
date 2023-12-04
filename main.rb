class Component
  def calculate_price
    raise NotImplementedError, "Subclasses must implement the 'calculate_price' method"
  end
end

class Plan < Component
  attr_accessor :name, :price

  def initialize(name, price)
    @name = name
    @price = price
  end

  def calculate_price
    @price
  end
end

class Pack < Component
  def initialize
    @components = []
  end

  def add_component(component)
    @components << component
  end

  def calculate_price
    total_price = 0

    @components.each do |component|
      total_price += component.calculate_price
    end

    total_price
  end
end

