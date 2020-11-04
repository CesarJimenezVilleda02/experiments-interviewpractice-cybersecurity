pruebas = "aeiou"

def toEFE(chars):
    charF = ""
    for i in chars:
        for j in pruebas:
            if (i == j):
                charF = charF + j + "f"
        charF = charF + i
    return charF

print (toEFE(str(input())))