def score(dice)
  aux = 0
  count = 0
  points = 0

  dice.sort.append(0).each do |value|
    if aux == value
      count += 1
      next
    end

    if count >= 3
      case_point = aux == 1 ? 1000 : aux * 100
      points += case_point * (count / 3)
    end

    if aux % 4 == 1
      points_for_one = aux == 1 ? 100 : 50
      points += points_for_one * (count % 3)
    end

    aux = value
    count = 1
  end

  points
end

puts(score([1, 1, 1, 3, 1]))
