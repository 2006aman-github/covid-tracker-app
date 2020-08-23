import React from "react";
import "./table.css";

function Table({ countries }) {
  return (
    <div className="table" style={{ color: "#000" }}>
      <h2>Live Cases By Country</h2>
      <br />
      {countries.map(({ country, cases }) => (
        <tr>
          <td>{country}</td>
          <td>
            <strong>{cases}</strong>
          </td>
        </tr>
      ))}
    </div>
  );
}

export default Table;
