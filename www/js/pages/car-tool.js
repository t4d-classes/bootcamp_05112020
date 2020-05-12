const config = {
  
  columns: [
      { caption: 'Id', field: 'id' },
      { caption: 'Make', field: 'make', format: s => String(s).toUpperCase() },
      { caption: 'Model', field: 'model' },
      { caption: 'Year', field: 'year' },
      { caption: 'Color', field: 'color' },
      { caption: 'Price', field: 'price' },
  ],
};


const colors = [
  { id: 1, name: 'red', hexcode: '#FF0000' },
  { id: 2, name: 'blue', hexcode: '#0000FF' },
];

document.addEventListener('DOMContentLoaded', () => {

  const carRows = cars.map(car => {
    const trElement = document.createElement('tr');
    const carCols = config.columns.map(colConfig => {
        const tdElement = document.createElement('td');
        tdElement.append(colConfig.format ?
          colConfig.format(car[colConfig.field]) : car[colConfig.field]);
        return tdElement;
    });
    trElement.append(...carCols);
    return trElement;
  });
  
  document.querySelector('#car-table > tbody').append(...carRows);

});