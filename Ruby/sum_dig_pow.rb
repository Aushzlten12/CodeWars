def sum_dig_pow(inicio, fin)
  values_eureka = []
  (inicio..fin).to_a.each do |element|
    pow_value = element.to_s.split('').map(&:to_i).each_with_index.reduce(0) do |acc, (number, index)|
      acc + number.pow(index + 1)
    end
    values_eureka.append(pow_value) if pow_value == element
  end
  # for i in (inicio..fin)
  #   pow_value = i.to_s.split('').map { |digit| digit.to_i }.each_with_index.reduce(0) do |acc, (number, index)|
  #     acc + number.pow(index + 1)
  #   end
  #   values_eureka.append(pow_value) if pow_value == i
  # end
  values_eureka
end

puts sum_dig_pow(10, 1000)
