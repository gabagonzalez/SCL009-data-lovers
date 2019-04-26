/* Manejo del DOM */
//opción de recorrer la data con for

const lolValues = Object.values(window.LOL.data); //const para acceder a la data
//const lolKeys = Object.keys(window.LOL.data);

const container = document.getElementById("root");//para visualizar nuestras card en el div root

let showLol = (lolValues) => {
for(let i=0; i < lolValues.length; i++){   
container.innerHTML += `
    <div id="flip-container">
     <div class='cards'>
      <img class='front' src="${lolValues[i].img}"/>
      <div class='back'>
        <li class='name'> ${lolValues[i].id}</li>
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

