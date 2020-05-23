import React from 'react';

import { DataCell } from './misc';


// function CarEditRow(props) {

//   this._super(props);

//   this.state = {
//     ...props.car
//   };

// }

// CarEditRow.prototype = Object.create(React.Component.prototype);
// CarEditRow.prototype.constructor = CarEditRow;
// CarEditRow.prototype._super = React.Component;

// CarEditRow.prototype.change = function(e) {
//   this.setState({
//     [ e.target.name ]: e.target.type === 'number'
//       ? Number(e.target.value)
//       : e.target.value
//   });
// }


export class CarEditRow extends React.Component {

  state = {
    ...this.props.car,
  };
  
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     ...props.car
  //   };

  //   this.change = this.change.bind(this);
  //   this.saveCar = this.saveCar.bind(this);
  // }

  change = (e) => {
    this.setState({
      [ e.target.name ]: e.target.type === 'number'
        ? Number(e.target.value)
        : e.target.value
    });
  }

  saveCar = () => {
    this.props.onSaveCar({
      ...this.state,
      id: this.props.car.id,
    });
  }
  
  render() {

    return (
      <tr>
        <DataCell>{this.props.car.id}</DataCell>
        <DataCell>
          <input type="text" id="make-input" name="make"
                value={this.state.make} onChange={this.change} />
        </DataCell>
        <DataCell>
          <input type="text" id="model-input" name="model"
                value={this.state.model} onChange={this.change} />
        </DataCell>
        <DataCell>
          <input type="number" id="year-input" name="year"
                value={this.state.year} onChange={this.change} />
        </DataCell>
        <DataCell>
          <input type="text" id="color-input" name="color"
                value={this.state.color} onChange={this.change} />
        </DataCell>
        <DataCell>
          <input type="number" id="price-input" name="price"
                value={this.state.price} onChange={this.change} />
        </DataCell>
        <DataCell>
          <button type="button" onClick={this.saveCar}>
            Save
          </button>
          <button type="button" onClick={this.props.onCancelCar}>
            Cancel
          </button>
        </DataCell>
      </tr>
    );

  }

};