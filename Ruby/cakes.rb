def cakes(recipe, available)
  total_keys = (recipe.keys + available.keys).uniq

  possibles = total_keys.map do |key|
    recipe_value = recipe[key] || 0
    available_value = available[key] || 0
    recipe_value.zero? ? nil : available_value / recipe_value
  end

  possibles.compact.sort.first
end

puts(
  cakes(
    { 'flour' => 500, 'sugar' => 200, 'eggs' => 1 },
    { 'flour' => 1200, 'sugar' => 1200, 'eggs' => 5, 'milk' => 200 }
  )
)
