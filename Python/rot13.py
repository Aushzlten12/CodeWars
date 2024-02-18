def rot13(message):
    convertion = ""
    for character in message:
        if ord(character) <= ord("Z") and ord(character) >= ord("A"):
            orden = (
                ord(character) + 12 - ord("Z") + ord("A")
                if ord(character) + 13 > ord("Z")
                else ord(character) + 13
            )
            convertion += chr(orden)
            continue
        if ord(character) >= ord("a") and ord(character) <= ord("z"):
            orden = (
                ord(character) + 12 - ord("z") + ord("a")
                if ord(character) + 13 > ord("z")
                else ord(character) + 13
            )
            convertion += chr(orden)
            continue
        convertion += character
    return convertion


print(rot13("test"))
