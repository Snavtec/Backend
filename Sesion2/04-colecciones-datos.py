# Listas
dias = ['Lunes', 'Martes', 'Miercoles']

# metodo para agregar un nuevo valor a la lista
dias.append('jueves')

print(dias)

# metodo para eliminar un valor de la lista
dias.remove('Martes')
print(dias)
#dias.clear()
print(dias)

#VARIABLES MUTABLES/INMUTABLES
lista1 = [1,2,3,4,5]

lista2 = lista1
lista3 = lista1[:]
lista1[0]= 50
print(id(lista1))
print(id(lista2))
print(id(lista3))
print('La lista 1 es:', lista1)
print('La lista 2 es:', lista2)
print('La lista 3 es:', lista3)

# Tuplas
# coleccion se parece a una lista PERO la tupla no se puede modificar sus valores una vez creada
alumnos = ['Eduardo', 'Pedro', 'Ana', 'Roberta']
# se usa para almacenar algunos valoresque nunca va a cambiar su contenido
CONFIGURACION = (
    {
        'Nombre':'API_KEY',
        'Valor' : 'xxxxx.xxxx.xxxx'
    },
    {
        'Nombre':'Sendgrid',
        'Valor' : 'asdasdasdasdasd'
    })
CONFIGURACION = []

# DICCIONARIOS
# Coleccion de elementos que estan INDEXADOS cuentan con una LLAVE (o clave) y su valor o contenido se puede modificar el contenido y ademas se puede crear nuevas 
persona = {
    
}

# CONJUNTOS
# Es la unica coleccion de datos DESORDENADA cuentan con una LLAVE (o clave) y su valor o contenido se pueden modificar el contenido y ademas se puede crear nuevas llaves
