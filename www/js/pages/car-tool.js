const config = {
  columns: [
      { caption: 'Id', field: 'id' },
      { caption: 'Make', field: 'make' },
      { caption: 'Model', field: 'model' },
      { caption: 'Year', field: 'year' },
      { caption: 'Color', field: 'color' },
      { caption: 'Price', field: 'price' },
  ],
};

const carRows = cars.map(car => {
  const trElement = document.createElement('tr');
  const carCols = config.columns.map(colConfig => {
      const tdElement = document.createElement('td');
      tdElement.append(car[colConfig.field]);
      return tdElement;
  });
  trElement.append(...carCols);
  return trElement;
});
document.querySelector('#car-table > tbody').append(...carRows);