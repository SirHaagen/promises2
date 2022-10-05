
//ESTOS DATOS SIRVEN PARA LOS EJEMPLOS "OPCIÓN 1" Y "OPCIÓN 2"
let datos= [
  ["Pepito Pérez", "@carequeso"],
  ["Vato Serduro", "@apestosin"],
  ["Rosa Melano"]
];

//! DESCOMENTAREAR EL EJEMPLO "OPCIÓN 1" Y "OPCIÓN 2" QUE QUIERA EJECUTAR (SOLO UNO)

// OPCIÓN 1: RECORRIENDO EL ARREGLO AUTOMÁTICAMENTE

/*
for(i in datos){
  
  let persona= new Promise((resolve, reject) => {
    if(datos[i][0]== undefined) reject("la persona no se encuentra");
    else resolve(datos[i][0]);
  });

  let instagram= new Promise((resolve, reject) => {
    if(datos[i][1]== undefined) reject(`La persona ${datos[i][0].toUpperCase()} no tiene instagram`);
    else resolve(datos[i][1]);
  })

  persona
  .then(resultado=> console.log(resultado))
  .catch(error=> console.log(error));

  instagram
  .then(resultado=> console.log(resultado))
  .catch(error=> console.log(error));

}
*/

// OPCIÓN 2: COLOCANDO MANUALMENTE UN ID

/*
id= 2;

let persona= new Promise((resolve, reject) => {
  if(datos[id]== undefined ||datos[id]== 0) reject("la persona no se encuentra");
  else resolve(datos[id][0]);
});

let instagram=  new Promise((resolve, reject) => {
  if(datos[id][1]== undefined || datos[id][1]== 0) reject(`La persona no tiene instagram`);
  else resolve(datos[id][1]);
});

persona
.then(resultado=> console.log(resultado))
.catch(error=> console.log(error));

instagram
.then(resultado=> console.log(resultado))
.catch(error=> console.log(error));
*/

//-------------------------------------------------------------------------------------
//OTRO EJEMPLO

/*
let objeto= {
  propiedad1: "valor 1",
  propiedad2: "valor 2",
  propiedad3: "valor 3"
};

let informacion= ()=>{
  return new Promise((resolve, reject) => {
    setTimeout(()=> resolve(objeto),3000);
  })
};

informacion()
.then(resultado=>console.log(resultado))
.catch(error=> console.log(error));
*/

//OTRO EJEMPLO


function randomDelayed(max = 10, expected = 5, delay =  1000) {
	return new Promise((resolve, reject) => {

		const number = Math.floor(Math.random() * max);
    //con esta línea obtengo un número random entre 0 y la variable max

		setTimeout(
			() => number > expected
				? resolve(number)
				: reject(`número menor al esperado (${number}), debe ser mayor a ${expected}`),
			delay
		);
	});
}

randomDelayed(100, 75, 2500)
    .then(number => console.log(number))
    .catch(error => console.error(error));


//OTRO EJEMPLO

/*
let delayed= x=> new Promise((resolve, reject)=> setTimeout(()=> resolve(x), 1000));

delayed(7)
.then(resultado=> {
  console.log(resultado);
  return delayed(resultado + 7); //llamo de nuevo a la promesa, y como está dentro de una función, lleva return
  //.then(resultado=> delayed(7+7)) convertido en una función
})
.then(resultado=> console.log(resultado))
.then(resultado=> Promise.reject('Hubo un error')) //creo un error
.catch(error=> console.log(error));
*/