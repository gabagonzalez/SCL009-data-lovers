/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

/*const example = () => {
  return 'example';
};

window.example = example;*/

//HISTORIA DE USUARIO 2-FUNCIÓN ORDENAR DATA

let orderLol = (lolValues, champsOrder) => {
  let resultOrder = [];
  //orden "00" es A-Z
  if (champsOrder == "00"){
    resultOrder = lolValues.sort(sortBy);
  }//orden "01" es Z-A
  else if (champsOrder == "01"){
    resultOrder = lolValues.sort(sortBy).reverse();
  }//orden "02" es DIFICULTAD MENOR A MAYOR
  else if (champsOrder == "02"){
    resultOrder= lolValues.sort(sortOrder);
  }//orden "03" es DIFICULTAD MAYOR A MENOR
  else if (champsOrder == "03"){
    resultOrder= lolValues.sort(sortOrder).reverse();
  }
  return resultOrder;
}
window.orderLol = orderLol;

//ordena Alfabéticamente
function sortBy (a,b) {
  if(a.name >b.name){
    return 1;
  }if(a.name <b.name){
    return -1;
  } return 0;
}
//ordena Numéricamente
function sortOrder (a,b){
  if(a.info.difficulty >b.info.difficulty){
    return 1;
  }if(a.info.difficulty <b.info.difficulty){
    return -1;
  } return 0;
 // return a.info.difficulty - b.info.difficulty;
}

//HISTORIA DE USUARIO 3-FUNCIÓN FILTRAr DATA


const filterLol = (lolValues,rolFilter) => { 
  let result = lolValues.filter(element => {
    return element.tags.includes(rolFilter); 
  }) 
  return result;
}

window.filterLol = filterLol;

//HISTORIA DE USUARIO 4-FUNCIÓN PARA SUMAR DATA (SUMAR POR TIPO DE ROL)
//FUNCIÓN CALCULAR

const computeStats = (lolValues,rolFilter) => {
  let calculateResult = filterLol(lolValues, rolFilter).length;

  return calculateResult;
  //return calculateResult me entrega la cantidad de jugadores
}
//mathround redondea al entero más cercano
//length: que mi funcion calculate me devuleva el numero de elmentos que contiene el filtro que eligió el usuario
window.computeStats = computeStats;
