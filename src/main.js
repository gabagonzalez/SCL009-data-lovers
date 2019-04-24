/* Manejo del DOM */
/*declaracion de variables para acceder a la data*/
const arrDataLolTot = Object.values(LOL.data);
const arrayKeys = Object.values(arrDataLolTot[0]);
/* creo const donde dejare lo obtenido en la data*/
const containerPrincipal = document.getElementById('container-listChampions');
/* const cards,que tendra contenido que quiero c/ forEach que recorre data (uso_html dinamico)*/
const arrayTemplateCards = (arrDataLolTot) => {
  let templateCards = '';
  arrDataLolTot.forEach(dataLol => {
    const cards = `
    <div id="flip-container">
     <div class='cards'>
      <img class='front' src="${ dataLol.img}"/>
      <hr>
      <div class='back'>
        <li class='name'> ${dataLol.name}</li>
        <li class='title'> ${ dataLol.title}</li>
      </div>
    </div>
    </div>`;
    templateCards += cards;
  }),
  containerPrincipal.innerHTML = templateCards;
};
/*imprimi en pantalla dentro de containerlistchampions*/

/*ordenar data al mostrar en html*/
arrayTemplateCards(arrDataLolTot);
  const selectOrder = document.getElementById('order');
selectOrder.addEventListener('change', () => {
  const dataOrdenada = lol.sortChampions(arrDataLolTot, selectOrder.value);
  arrayTemplateCards(dataOrdenada);
});
