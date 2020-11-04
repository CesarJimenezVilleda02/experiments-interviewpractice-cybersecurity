f = open("examen.txt", "r")
archivo = f.readlines()
f.close()

m = []

for i in range(0, len(archivo)):
    newLine = archivo[i].split(" ")
    m.append(newLine)

print(m)