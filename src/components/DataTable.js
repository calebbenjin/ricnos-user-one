import React from 'react'

export default function DataTable({data}) {

  const columns = data[0] && Object.keys(data[0]); 
  // const status = data.status

  // console.log(columns)

  // console.log(data.map(stat =>  stat))

  return (
    <div className="resTable">
      <table cellPadding={0} cellSpacing={0}>
        <thead>
          <tr>{data[0] && columns.map((heading, i) => <th data-label={heading} key={i} scope="col">{heading}</th>)}</tr>
        </thead>
        <tbody>
          {data.map((row, i) => <tr key={i}>
          {console.log(row.status.toString())}
            {
              columns.map((column, idx) => <td  key={idx}> {row[column]} </td>)
            }
          </tr>)}
        </tbody>
      </table>
    </div>
  )
}