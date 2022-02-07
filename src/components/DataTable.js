import React from 'react';
import Link from 'next/link';

export default function DataTable({ data, columns }) {

  return (
    <div className="resTable">
      <table cellPadding={0} cellSpacing={0}>
        <thead>
          <tr>
            {columns?.map((item, i) => (
              <th key={`_${i}`}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item) =>  {
            
            return (
              <tr key={item.id}>
              <td></td>
              <td>{item?.trackNo}</td>
              <td>{item.agent?.name}</td>
              <td>{item?.item}</td>
              <td>{item?.from}</td>
              <td>{item?.to}</td>
              <td>{item?.status}</td>
              <td>{item?.price}</td>
            </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}
