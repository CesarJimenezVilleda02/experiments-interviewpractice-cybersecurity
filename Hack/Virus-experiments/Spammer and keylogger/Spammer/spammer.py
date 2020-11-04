import time
import pyautogui

def SendScript():
	time.sleep(10)
	while True:
		pyautogui.typewrite("Linus Torvalds: Linux es tan rápido que, en él, un bucle infinito dura pocos segundos.")
		pyautogui.press('enter')
		time.sleep(5)

SendScript()


