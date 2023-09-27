// Row.js

import React from 'react';

function Row({ pokemon, columns }) {
  return (
    <tr>
      {columns.map((columnName) => (
        <td key={columnName}>{pokemon[columnName]}</td>
      ))}
    </tr>
  );
}

export default Row;
