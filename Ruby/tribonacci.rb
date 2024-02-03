def tribonacci(signature, number)
  # AKA Tribonacci.
  values_tribonacci = []
  return values_tribonacci if number.zero?

  signature.each_with_index { |value, index| values_tribonacci.append(value) if index < number }
  values_tribonacci.append(values_tribonacci.slice(values_tribonacci.length - 3,
                                                   values_tribonacci.length).sum) while values_tribonacci.length < number
  values_tribonacci
end

puts tribonacci([1, 2, 3], 5)
