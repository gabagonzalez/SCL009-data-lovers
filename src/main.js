/* Manejo del DOM */
/* Manejo del DOM */

const lolValues = Object.values(window.LOL.data);
//const lolKeys = Object.keys(window.LOL.data);
//console.log(lolValues);

const container = document.getElementById("root");

for(let i=0; i < lolValues.length; i++){  
//const container = document.getElementById("root");
container.innerHTML += `

<div class="card" >
<div class="card-body float:left;">
    <img src="${lolValues[i].img}" class="card-img-top" alt="...">
    <div class="card-down float:right">
    <h5 class="card-title">${lolValues[i].id}</h5>
    </div>
    </div>
</div>
`    //console.log(lolValues[i].id);
}
/*
//vamos a meter todo al div "root"

const showLol = (lolValues) => {
 // quiero mostrar foto y nombre (id y img en lol.js)
 //foreach: aquienvoyarecorrer.foreach(Element corresponde al Objeto Que esta Dentro De Cada Posicion) 
 //foreachmuestra lo que esta adentrodesde el principio hasta el final
 //element es como el data[i] muestra cada objeto

 lolValues.forEach(element => {
    
     container.innerHTML += <p>${element.id}</p>
     
 });

}*/

window.onload = showLol(lolValues);