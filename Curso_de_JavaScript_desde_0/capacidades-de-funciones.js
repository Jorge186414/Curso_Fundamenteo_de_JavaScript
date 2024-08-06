// Capacidades que tienen las funciones al igual que otros objetos
// 1. Pasar funciones como argumentos --> callback
function a() { }
function b(a) { }
b(a)

// 2. Retornar funciones
function c() {
    function d() { }
    return d
}

// 3. Asignar funciones a variables --> Expresion de Funcion
const e = function () { }

// 4. Tener propiedades y metodos
function imprimirInformacion() {
    console.log(`Nombre: ${this.nombre}`)
    console.log(`Apellidso: ${this.apellido}`)
    console.log(`Ocupacion: ${this.ocupacion}`)
}
const obj = {
    nombre: 'Jorge',
    apellido: 'Miranda',
    ocupacion: 'Estudiante'
}
imprimirInformacion.call(obj)

// 5. Anidar funciones --> Nested Functions
function f() {
    function g() {
        function h() {
        }
        h()
    }
    g()
}
a()

// 6. Almancenar funciones en un objeto --> Metodo
const rocket = {
    nombre: 'Falcon 9',
    launchMessage: function launchMessage() { console.log('fire') }
}

rocket.launchMessage()