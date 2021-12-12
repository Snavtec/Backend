# Condicional IF ELSE
edad = 30
edad_minima = 18

if edad >= edad_minima:
    # TODO: aca implementare la accion cuando se mayor de edad
    print('Eres mayor de edad, puedes ingresar')
elif edad > 15:
    print('Yo siempre me ejecuto')

# operador ternario
# es para devolver un valor y almacenarlo en una variable y en una sola linea de codigo
resultado = 'eres mayor de edad' if edad >= edad_minima else 'eres menor de edad'
print(resultado)

# tengo el siguiente numero
numero = 10
# como saber si es par o impar
 
# luego de haber terminado con el if hacer uso del operador ternario
if numero % 2 == 0:
    print('es par')
else:
    print('es impar')

resultado = 'es par' if numero % 2 == 0 else 'es impar'
print(resultado)

persona = {
    'nombre'       : 'Raul',
    'nacionalidad' : 'Boliviana',
    'sexo'         : 'M'
}

# Validar si la persona es Raul y ademas es Peruana
# Si, la persona es _________ y su nacionalidad es______
# La persona es ________ y su nacionalidad es___________
if(persona['nombre']=='Raul' and persona['nombre']=='Peruana'):
    print('Si, la persona es', persona['nombre'], 'y su nacionalidad es:', persona['nacionalidad'])
else:
    print('No, La persona es', persona['nombre'], 'y su nacionalidad es', persona['nacionalidad'])