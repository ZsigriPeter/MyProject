/* eslint-disable max-len */
//import { products } from '/data.js';
import { fs } from '../../index.js';

const makeGameArea = function (){
  return '<div class=\'gameArea\'></div>';
};

const makeRandomTileMap = function (height, width){
  const files = fs.readdirSync('public/media/img/tileset/1_Tiles/');
  console.log(files);
};

const makeOneTile = function (x, y, img){
  const location = 'public/media/img/tileset/1_Tiles/';
  return `<div class="tile" style="left: ${x}px;top: ${y}px;">
  <img src="${location}${img}"/>
  </div>`;
};

//tile 32x25

const loadEvent = function() {

  // Write your JavaScript code after this line
  const container = document.getElementById('root');
  const newParagraph = makeGameArea();
  container.insertAdjacentHTML('beforeend', newParagraph);
  makeRandomTileMap(1, 2);
  // Write your JavaScript code before this line

};

window.addEventListener('load', loadEvent);
