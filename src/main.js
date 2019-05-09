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
      <img class='front' src="${lolValues[i].img}" data-toggle="modal" data-target="#exampleModal${lolValues[i].id}"/>
      <hr>
      <div class='back'>
       <li class='title'> ${lolValues[i].difficulty}</li>
      </div>
    </div>
  </div> <div class="modal fade" id="exampleModal${lolValues[i].id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">${lolValues[i].name}</h5>
        
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>

      </div>
      <div class="modal-body"> 
      <img class='modal-img' src="${lolValues[i].splash}"/>
      <h5 class="modal-title">${lolValues[i].title}</h5>
      <p>Ataque: ${lolValues[i].info.attack}</p>
			<p>Defensa: ${lolValues[i].info.defense}</p>
      <p>Magia: ${lolValues[i].info.magic}</p>
      <p>Dificultad: ${lolValues[i].info.difficulty}</p>
      <p>Vida: ${lolValues[i].stats.hp} (+${lolValues[i].stats.hpperlevel} por nivel)</p>
      <p>Regeneración de Vida: ${lolValues[i].stats.hpregen} (+${lolValues[i].stats.hpregenperlevel} por nivel)</p>
      <p>Daño de Ataque: ${lolValues[i].stats.attackdamage} (+${lolValues[i].stats.attackdamageperlevel} por nivel)</p>
      <p>Velocidad de Movimiento: ${lolValues[i].stats.movespeed}</p>
      <p>Armadura: ${lolValues[i].stats.armor} (+${lolValues[i].stats.armorperlevel} por nivel)</p>
      <p>Resistencia Mágica: ${lolValues[i].stats.spellblock} (+${lolValues[i].stats.spellblockperlevel} por nivel)</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
    `  
  }
}

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
      <img class='front' src="${element.img}" data-toggle="modal" data-target="#exampleModal${element.id}"/>
      <hr>
      <div class='back'>
        <li class='title'> ${element.info}</li>
      </div>
    </div>
  </div> 
  <div class="modal fade" id="exampleModal${element.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">${element.name}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
      </div>
      <div class="modal-body">
      <img class='modal-img' src="${element.splash}"/>
      <h5 class="modal-title">${element.title}</h5>
      <p>Ataque: ${element.info.attack}</p>
      <p>Defensa: ${element.info.defense}</p>
      <p>Magia: ${element.info.magic}</p>
      <p>Dificultad: ${element.info.difficulty}</p>
      <p>Vida: ${element.stats.hp} (+${element.stats.hpperlevel} por nivel)</p>
      <p>Regeneración de Vida: ${element.stats.hpregen} (+${element.stats.hpregenperlevel} por nivel)</p>
      <p>Daño de Ataque: ${element.stats.attackdamage} (+${element.stats.attackdamageperlevel} por nivel)</p>
      <p>Velocidad de Movimiento: ${element.stats.movespeed}</p>
      <p>Armadura: ${element.stats.armor} (+${element.stats.armorperlevel} por nivel)</p>
      <p>Resistencia Mágica: ${element.stats.spellblock} (+${element.stats.spellblockperlevel} por nivel)</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
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
       <img class='front' src="${element.img}" data-toggle="modal" data-target="#exampleModal${element.id}"/>
        <div class='back'>
          <li class='name'> ${element.name}</li>
        </div>
      </div>
      </div> 
      </div>
      <div class="modal fade" id="exampleModal${element.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">${element.name}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>

      </div>
      <div class="modal-body">
      <img class='modal-img' src="${element.splash}"/>
      <h5 class="modal-title">${element.title}</h5>
      <p>Ataque: ${element.info.attack}</p>
			<p>Defensa: ${element.info.defense}</p>
      <p>Magia: ${element.info.magic}</p>
      <p>Dificultad: ${element.info.difficulty}</p>
      <p>Vida: ${element.stats.hp} (+${element.stats.hpperlevel} por nivel)</p>
      <p>Regeneración de Vida: ${element.stats.hpregen} (+${element.stats.hpregenperlevel} por nivel)</p>
      <p>Daño de Ataque: ${element.stats.attackdamage} (+${element.stats.attackdamageperlevel} por nivel)</p>
      <p>Velocidad de Movimiento: ${element.stats.movespeed}</p>
      <p>Armadura: ${element.stats.armor} (+${element.stats.armorperlevel} por nivel)</p>
      <p>Resistencia Mágica: ${element.stats.spellblock} (+${element.stats.spellblockperlevel} por nivel)</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
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
    <p> Del total de los campeones; ${calcResult} juegan este Rol </p>
  </div> 
  `    
});


  