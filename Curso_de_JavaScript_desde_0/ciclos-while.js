/*
Ciclo while
En este tipo de ciclos, primero se evalua una condicion,
si esta se evalua como verdadera nos devolvera un true,
y ejecutara las lineas de codigo en su bloque, en caso 
contrario el ciclo se rompe y no hace nada.
*/
let contador = 0
while (contador < 10) {
   console.log(`contador desde while: ${contador}`)
   contador++
}

/*
Ciclo do while
A diferencia del while, en este primero se hace la 
ejecucion de codigo dentro de su bloque, y una vez
que estas se ejecutan, pasa a evaluar la condicion, si
se evaluea como verdadera devolvera un true y se seguira
ejecutando hasta que sea evaluada como false, generando
un break y saliendose de la ejecucion de este.
*/
let contador2 = 0
do{
   console.log(`contador desde do while: ${contador2}`)
   contador2++
}while(contador2 < 10)