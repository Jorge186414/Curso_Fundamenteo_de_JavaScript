// Ciclo for normal
let list = ['eat', 'sleep', 'code', 'repeat']

for (let i = 0; i < list.length; i++) {
    console.log(list[i])
}

/* 
Ciclo for of
permite iterar sobre objetos iterables
por lo comun son arrays o strings
*/
let mangas = ['Dragon Ball', 'One Piece', 'Hunter X Hunter', 'BTOOM']
for (manga of mangas) {
    console.log(manga)
}

/*
Ciclo for in
Nos permite iterar sobre objetos iterables, mas en
especifico serian las propiedades de un objeto.
Nos da como resultado el nombre de la propiedad en lugar
del valor de esta propiedad.
*/
const datos_manga = {
    autor: 'Eichiro Oda',
    nombre: 'One Piece',
    tomos: 108,
    editorial: 'Panini Mexico'
}

for(dato in datos_manga){
    console.log(dato)
}

for(dato in datos_manga){
    console.log(`${dato}: ${datos_manga[dato]}`)
}