def find_it(seq)
  seq.select { |item| seq.count(item).odd? }.uniq.first.to_i
end

p(find_it([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]))
