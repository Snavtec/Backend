from flask import Flask

# En Python tenemos varias variables que son de uso propio de python. No podemos modificar ni alterar.
# Esta variable sirve para indicar si estamos en el archivo principal del proyecto.
# __main__ > esta variable sirve para indicar si estamos en el archivo principal del proyecto

app = Flask (__name__)

# El decorador sirve para usar el metodo de una clase pero implementandolo en una funcion
@app.route('/')
def inicio():
    return 'Bienvenido a mi API'

@app.route('/bienvenido')
def bienvenido():
    return 'Te doy la bienvenida a mi API'

@app.route('/bienvenido/home')
def bienvenido_home():
    return 'Te doy la bienvenida a mi API home'

if __name__ == '__main__':
    app.run(debug=True, port=3000)