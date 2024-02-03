def longest(first_string, second_string)
  (first_string.split('').sort.join('') + second_string.split('').sort.join('')).split('').uniq.sort.join('')
end

longest('xyaabbbccccdefww', 'xxxxyyyyabklmopq')
