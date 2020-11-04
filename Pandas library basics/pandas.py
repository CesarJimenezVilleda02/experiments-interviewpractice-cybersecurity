import pandas as pd

datos_consumo = pd.read_excel("A01702674_Actividad2_Registro.xlsx")

datos_consumo.head()

datos_consumo.shape

datos_consumo.columns

datos_consumo.dtypes

datos_consumo.info()

datos_consumo.describe()