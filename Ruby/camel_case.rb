def to_camel_case(phrase)
  array = phrase.split(/[_-]/)
  array.map { |word| array.index(word).zero? ? word : word.capitalize }.join
end

puts to_camel_case('the_stealth_warrior')
