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


const cars = [
  { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2020, color: 'blue', price: 45000 },
  { id: 2, make: 'Tesla', model: 'S', year: 2019, color: 'red', price: 125000 },
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