class Sample

  def initialize(obj)

    obj.each { |key, value|
      define_singleton_method(key) { return value }
    }

  end

end

h = {"this" => [1,2,3,4,5,6], "that" => ['here', 'there', 'everywhere'], :other => 100}

c = Sample.new(h)

p c.this == [1,2,3,4,5,6]
p c.that == ['here', 'there', 'everywhere']
p c.other == 100


