// Table.js

import React from 'react';
import Row from './Row';

function Table({ data, columns }) {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((columnName) => (
            <th key={columnName}>{columnName}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((pokemon) => (
          <Row key={pokemon.id} pokemon={pokemon} columns={columns} />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
