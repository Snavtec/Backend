from flask import Flask

# En Python tenemos varias variables que son de uso propio de python. No podemos modificar ni alterar.
# Esta variable sirve para indicar si estamos en el archivo principal del proyecto.
# __main__ > esta variable sirve para indicar si estamos en el archivo principal del proyecto

app = Flask (__name__)

app.run()