def row_sum_odd_numbers(n)
  row = []
  contador = 1
  for _ in 1..n
    row << n * (n - 1) + contador
    contador += 2
  end

  row.sum
end

p(row_sum_odd_numbers(4))
