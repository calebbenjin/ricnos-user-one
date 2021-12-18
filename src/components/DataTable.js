import React from 'react';
import Link from 'next/link';

export default function DataTable({ data, columns }) {
  // const columns = data[0] && Object.keys(data[0]);
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
          {data.map((row, i) => (
            <Link
              style={{ cursor: 'pointer' }}
              key={`_${i}`}
              href={`/dashboard/pickup/${row.id}/confirm`}
            >
              <tr key={`_${i}`}>
                {columns.map((column, i) => {
                  return <td key={`_${i}`}>{row[column]}</td>;
                })}
              </tr>
            </Link>
          ))}
        </tbody>
      </table>
    </div>
  );
}
