import re


def order(sentence):
    return " ".join(
        sorted(sentence.split(), key=lambda word: int(re.findall("\d", word)[0]))
    )


order("is2 Thi1s T4est 3a")
