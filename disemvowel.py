def disemvowel(string_):
    for letter in "aeiouAEIOU":
        string_ = string_.replace(letter, "")
    return string_


print(disemvowel("This website is for losers LOL"))
