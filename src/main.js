/* Manejo del DOM */

const lolValues = Object.values(window.LOL.data);
//const lolKeys = Object.keys(window.LOL.data);

const container = document.getElementById("root");

for(let i=0; i < lolValues.length; i++){  

container.innerHTML += `

<div class="card" >
<div class="card-body float:left;">
    <img src="${lolValues[i].img}" class="card-img-top" alt="...">
    <div class="card-down float:right">
    <h5 class="card-title">${lolValues[i].id}</h5>
    </div>
    </div>
</div>
`    
}

window.onload = showLol(lolValues);