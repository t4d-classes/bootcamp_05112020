'use strict';

const colors = [
  { id: 1, name: 'red', hexcode: '#FF0000' },
  { id: 2, name: 'blue', hexcode: '#0000FF' },
];

document.addEventListener('DOMContentLoaded', () => {

  console.log(colors);

  const ulElement = document.querySelector('#color-list');

  console.dir(ulElement);

  const liElement = document.createElement('li');
  liElement.textContent = colors[0].name;

  console.dir(liElement);

  ulElement.append(liElement);




});
