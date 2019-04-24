/* Manejo del DOM */

const lolValues = Object.values(window.LOL.data);
//const lolKeys = Object.keys(window.LOL.data);

const container = document.getElementById("root");

for(let i=0; i < lolValues.length; i++){  

container.innerHTML += `
    <div id="flip-container">
     <div class='cards'>
      <img class='front' src="${lolValues[i].img}"/>
      <hr>
      <div class='back'>
        <li class='name'> ${lolValues[i].id}</li>
        <li class='title'> ${lolValues[i].title}</li>
      </div>
    </div>
    </div> 
    `
   
}

window.onload = showLol(lolValues);
