import React from 'react';

import carToolPageStyles from './misc.module.css';

export const HeaderCell = ({ children }) => 
  <th className={carToolPageStyles.carTableHeaderCell}>{children}</th>

export const DataCell = ({ children }) => 
  <td className={carToolPageStyles.carTableDataCell}>{children}</td>
