# variable numerica
numero = 10
numero2 = 10.5

numero = "Febrero"

# variables de texto o string
nombre = "Eduardo"
apellido = 'Ramiro'

html = '''<html>
<p>
</p>'''

html = """<html>
<p>
</p>"""

print('holaaaaaaaaa :3')

print(type(nombre))
#str = string
#int = integer
#float = float
print(type(numero))
print(type(numero2))
#bool = boolean

soltero = True
calor = False
print(type(soltero))

# VARIABLES que tienes varios valores
# ARREGLOS = LISTAS LIST
edades = [10, 12, 40, 60, 'Eduardo', 14.5, False, [1, 2]]
# para ingresar a los valores de una lista debemos indicar la POSICION que siempre empienza en 0 (CERO), ademas si queremos usar valores negativos entonces la lista empezara por la ultima posicion (-1 : la ultima posicion)
# si nosotros en la posicion colocamos el siguiente formato: [n:m], entonces estaremos indicando que queremos ir desde la posicion 'n', hasta NOTA: siempre el recorrido sera de izquierda a derecha aun asi usemos posiciones negativas
print(edades[2:7])

# JSON (JavaScript Object Notation) | Diccionario
# Nota: Si una llave se repite su valor sera modificado y se perdera el anterior valor 
curso = {
    'nombre'     : 'Backend',
    'dificultad' : 'Dificil',
    'skills'     : [     
        {   
            'nombre' : 'Base de datos',
            'nivel'  : 'Intermedio'
        },
        {
            'nombre' : 'ORM',
            'nivel'  : 'Avanzado'
        }
    ]
}

print(curso['dificultad'])

# quiero el nivel del skill ORM
print(curso['skills'][1]['nivel'])

[PrimerMes, segundo_mes, tercer_mes, cuarto_mes, quinto_mes] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo']

print(PrimerMes)

personas = [{   
    'nombre'       : 'Eduardo',
    'nacionalidad' : 'peruano',
    'hobbies'      : [
        {
            'nombre'      : 'Volar drones',
            'experiencia' : '2 años'
        },{
            'nombre'       : 'Programar',
            'experiencia'  : '1 mes'
        }
    ]
},{   
    'nombre'       : 'Juliana',
    'nacionalidad' : 'colombiana',
    'hobbies'      : [
        {
            'nombre'      : 'Montar bici',
            'experiencia' : '4 años'
        },{
            'nombre' : 'Bases de datos',
            'experiencia' : '8 meses'     
        }
    ]
}]

# nacionalidad de la primera persona

print(personas[0]['nacionalidad'])

# los hobbies de la segunda persona

print(personas[1]['hobbies'])

# la experiencia del segundo hobbie de la primera persona

print(personas[0]['hobbies'][1]['experiencia'])
