import React from 'react';

import { SectionHeader } from '../blocks/SectionHeader';

import toolPageStyles from './ToolPage.module.css';
import carToolPageStyles from './CarToolPage.module.css';

const HeaderCell = ({ children }) => 
  <th className={carToolPageStyles.carTableHeaderCell}>{children}</th>

const DataCell = ({ children }) => 
  <td className={carToolPageStyles.carTableDataCell}>{children}</td>


export const CarToolPage = ({ cars }) => {

  return (
    <>
      <SectionHeader headerText="Color Tool" />
      <section>
        <h3 className={toolPageStyles.contentSectionHeader}>
          Car Table
        </h3>

        <table>
            <thead>
              <tr>
                <HeaderCell>Id</HeaderCell>
                <HeaderCell>Make</HeaderCell>
                <HeaderCell>Model</HeaderCell>
                <HeaderCell>Year</HeaderCell>
                <HeaderCell>Color</HeaderCell>
                <HeaderCell>Price</HeaderCell>
              </tr>
            </thead>
            <tbody>
              {cars.map(car => <tr key={car.id}>
                <DataCell>{car.id}</DataCell>
                <DataCell>{car.make}</DataCell>
                <DataCell>{car.model}</DataCell>
                <DataCell>{car.year}</DataCell>
                <DataCell>{car.color}</DataCell>
                <DataCell>{car.price}</DataCell>
              </tr>)}
            </tbody>
          </table>
      </section>

    </>
  );

};