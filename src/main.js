/* Manejo del DOM */

const lolValues = Object.values(window.LOL.data); //const para acceder a la data
//const lolKeys = Object.keys(window.LOL.data);
const container = document.getElementById("root");//para visualizar nuestras card en el div root
const sum = document.getElementById('calculation'); //div para mostrar calculo

//HISTORIA DE USUARIO 1-PARA MOSTRAR DATA
//Opción de recorrer la data con for
let showLol = (lolValues) => {
  for(let i=0; i < lolValues.length; i++){   
    container.innerHTML += `
      <div id="flip-container">
        <div class='cards'>
         <li class='name'> ${lolValues[i].name}</li>
          <li class='name'> ${lolValues[i].tags}</li>
          <li class='name'> Dificult ${lolValues[i].info.difficulty}</li>
          <img class='front' src="${lolValues[i].img}"/>
          <hr>
          <div class='back'>
            <li class='title'> ${lolValues[i].difficulty}</li>
          </div>
        </div>
      </div> 
    `  
  }
}

/*con foreach
 //foreach: aquienvoyarecorrer.foreach(Element corresponde al Objeto Que esta Dentro De Cada Posicion) 
 //foreach muestra lo que esta dentro desde el principio hasta el final, recorre i++ automaticamente
 //element = lolValues[i] muestra cada objeto. no es la posicion, es lo que hay dentro de esa posicion

let showLol = (lolValues) => {
  lolValues.forEach(element => {
    container.innerHTML += `
      <div id="flip-container">
        <div class='cards'>
          <li class='name'> ${element.name}</li>
          <li class='name'> Dificult ${element.info.difficulty}</li>
          <img class='front' src="${element.img}"/>
          <div class='back'>
            <li class='name'> ${element.id}</li>
          </div>
        </div>
      </div> 
    `     
  });
}*/

window.onload = showLol(lolValues);
//onload: método window que asegura que todo esté cargado para que se pueda llamar a esta función

//HISTORIA DE USUARIO 2-PARA FUNCIÓN ORDENAR DATA
//DOM FUNCIÓN ORDENAR
document.getElementById('lol-sort').addEventListener('change', () => {
  let champsOrder = document.getElementById('lol-sort').value;
  let newResult = window.orderLol(lolValues,champsOrder);
  container.innerHTML ="";
  newResult.forEach(element => {
    container.innerHTML += ` 
      <div id="flip-container">
        <div class='cards'>
          <li class='name'> ${element.name}</li>
          <li class='name'> Dificult ${element.info.difficulty}</li>
          <img class='front' src="${element.img}"/>
          <hr>
          <div class='back'>
            <li class='title'> ${element.info}</li>
          </div>
        </div>
      </div> 
        ` 
  });
});
  
//HISTORIA DE USUARIO 3-PARA FUNCIÓN FILTRAR DATA
//DOM FUNCIÓN FILTRAR
document.getElementById("lol-filter").addEventListener("change",() => {
  let rolFilter = document.getElementById("lol-filter").value; 
  let lastResult = window.filterLol(lolValues,rolFilter); 
  container.innerHTML ="";
  lastResult.forEach(element => {
      container.innerHTML += `
      <div class='col'>
      <div id="flip-container">
       <div class='cards'>
       <li class='name'> ${element.name}</li>
       <li class='name'> ${element.tags}</li>
        <img class='front' src="${element.img}"/>
        <div class='back'>
          <li class='name'> ${element.name}</li>
        </div>
      </div>
      </div> 
      </div>
     `    
  });
});

//HISTORIA DE USUARIO 4-PARA FUNCIÓN CALCULAR
//CALCULO
//Dentro de la funcion se pide que aparezca el del calculo
document.getElementById("lol-filter").addEventListener("change",() => {
  document.getElementById("calculation").style.display = "block";
  let rolFilter = document.getElementById("lol-filter").value; 
  let calcResult = window.computeStats(lolValues,rolFilter);
  sum.innerHTML ="";
  sum.innerHTML +=  `
  <div>
    <p> El ${calcResult} % de los campeones, juegan este Rol </p>
  </div> 
  `    
});
/*
//PARA SUBIR  AL INICIO
$(document).ready(function(){
  $('.ir-arriba').click(function(){
    $('body,html').animate({
      scrollTop: '0px'
    },300);
  });
});*/


//PARA LLAMAR AL DIV CON EL RESULT
/*let resultDiv = (data) => {
  containerResult.innerHTML = "";
  data.forEach(element => {
    containerResult.innerHTML += `
    <div id="flip-container">
      <div class='cards'>
        <li class='name'> ${element.name}</li>
        <img class='front' src="${element.img}"/>
        <hr>
        <div class='back'>
          <li class='title'> ${element.difficulty}</li>
        </div>
      </div>
    </div> `  
  })
}*/
  