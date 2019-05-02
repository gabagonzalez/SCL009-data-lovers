/*global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');

describe('example', () => {
  
  it('debería ser una función', () => {
    assert.equal(typeof example, 'function');
  });

  it('debería retornar "example"', () => {
    assert.equal(example(), 'example');
  });
})*/

//DATA PARA LA FUNCIÓN
const lolValues = [

  {
    name: "Aatrox",
    tags:"Fighter", 
  },
  {
    name: "Ashe",
    tags: "Marksman",
  },
  {
    name: "Zyra",
    tags: "Mage",
  }
]

//TEST PARA LA FUNCIÓN FILTRADO

describe('función filterLol', () => {//a quien voy a testear
  
  it('debería ser una función', () => {//que voy a testear
    assert.equal(typeof filterLol, 'function');//assert metodo, se encarga de evaluar que el test haga lo que tiene que hacer
  });
//equal no sirve para arrays y objetos. equal busca que sea exacto
  it('debería retornar "Ashe" para primer champion de rol "Marksman"', () => {
    assert.deepEqual(window.filterLol(lolValues,"Marksman"), [{name: "Ashe", tags:"Marksman"}]);
    //deepequal para arreglos y objetos busca que sea similar, no exacto:
  }); //deepequal necesita recibir lo q debes evaluar y lo que retorna, debemos pasarle todos los parametros
 
})
