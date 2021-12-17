class Persona:
    # variables > atributos
    nombre   = ''
    edad     = 0
    estatura = 0.0

    #funcion > metodo
    def saludar(self):
        print('Hola!', self.nombre)

    # constructor > es el encargado de inicializar los atributos de la clase 
    # SIEMPRE EN TODO METODO al comienzo como primer parametro tiene que ir el self (sirve para referenciar a la copia que estamos usando)
    def __init__(self, nombre_de_la_persona, edad_persona, estatura_persona, sexo_persona = 'NS/NO'):
        self.nombre = nombre_de_la_persona
        self.edad = edad_persona
        self.estatura = estatura_persona
        self.sexo = 'NS/NO'

# Cuando a una variable le agregamos una clase, pasa a llamar una instancia de la clase (copia de la clase con todos sus atributos y metodos)
samuel = Persona(nombre_de_la_persona = 'Samuel', edad_persona = 20, estatura_persona = '1.89')
samuel.nombre = 'Samuel'
samuel.saludar() 

maria = Persona(nombre_de_la_persona = 'Maria', edad_persona = 30, estatura_persona = '1.80')
maria.saludar()