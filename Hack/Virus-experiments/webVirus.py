import webbrowser
import time

ligas = ["https://www.youtube.com/watch?v=KNwy51Em5og", "https://www.youtube.com/watch?v=z7BNXACnpzM"]

def PepeSech():
    while True:
        print("Has perdido el control perra")
        webbrowser.open(ligas[0], new=1, autoraise=True)
        webbrowser.open(ligas[1], new=1, autoraise=True)
        #Tiempo de espera para que no explote, reducelo para que sea más rápido o elimína la siguiente linea para máxima potencia
        time.sleep(20)

def NopoFavo():
    while True: 
        for i in range(0, 100):
            concat = "https://es.pornhub.com/video?page=" + str(i+1)
            webbrowser.open(concat, new=1, autoraise=True)
            #Tiempo de espera para que no explote, reducelo para que sea más rápido o elimínalo la siguiente linea para máxima potencia
            time.sleep(10)

#Quita los comentarios para que se ejecute cada función, si quitas las dos
#solo la primer función se estará ejecutando
NopoFavo()
# PepeSech()