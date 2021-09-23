import React, { useState, useEffect } from 'react'
import DataTable from './DataTable'
import { Heading } from '@chakra-ui/react'

export default function OrdersTable() {
  const [data, setdata] = useState([
    {
      id: '01',
      trackNo: 'QH46',
      date: 'july 2020',
      age: "Mr Collins",
      item: 'Bags',
      from: 'Lagos Leki',
      to: 'Port harcourt',
      status: 'Active',
      price: 12000,
    },
    {
      id: '02',
      trackNo: 'QH45',
      date: 'march 2020',
      age: "Mr Collins",
      item: 'Bags',
      from: 'Lagos Leki',
      to: 'Port harcourt',
      status: 'Completed',
      price: 23000,
    },
    {
      id: '03',
      trackNo: 'QH44',
      date: 'july 2020',
      age: "Mr Collins",
      item: 'Bags',
      from: 'Lagos Leki',
      to: 'Port harcourt',
      status: 'Completed',
      price: 3000,
    },
    {
      id: '04',
      trackNo: 'QH43',
      date: 'july 2020',
      age: "Mr Collins",
      item: 'Bags',
      from: 'Lagos Leki',
      to: 'Port harcourt',
      status: 'Cancelled',
      price: 2000,
    },
    {
      id: '05',
      trackNo: 'QH42',
      date: 'july 2020',
      age: "Mr Collins",
      item: 'Bags',
      from: 'Warri',
      to: 'Lagos',
      status: 'Active',
      price: 2000,
    },
    {
      id: '06',
      trackNo: 'QH42',
      date: 'july 2020',
      age: "Mr Collins",
      item: 'Bags',
      from: 'Warri',
      to: 'Lagos',
      status: 'Active',
      price: 25000,
    },
    {
      id: '07',
      trackNo: 'QH42',
      date: 'july 2020',
      age: "Mr Collins",
      item: 'Bags',
      from: 'Warri',
      to: 'Lagos',
      status: 'Active',
      price: 25000,
    },
    {
      id: '08',
      trackNo: 'QH42',
      date: 'july 2020',
      age: "Mr Collins",
      item: 'Bags',
      from: 'Kanu',
      to: 'Calabar',
      status: 'Active',
      price: 2500,
    },
    {
      id: '09',
      trackNo: 'QH42',
      date: 'july 2020',
      age: "Mr Collins",
      item: 'Bags',
      from: 'Owerri',
      to: 'Lagos',
      status: 'Active',
      price: 100,
    },
    {
      id: '10',
      trackNo: 'QH42',
      date: 'july 2020',
      age: "Mr Collins",
      item: 'Bags',
      from: 'Jos',
      to: 'Kastina',
      status: 'Active',
      price: 500,
    },
  ])
  const [q, setQ] = useState('')
  const [filterBtn, setFilterBtn] = useState(['A'])

  function search(rows) {
    const columns = rows[0] && Object.keys(rows[0])

    return rows.filter((row) =>
      columns.some(
        (column) =>
          row[column].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
      )
    )
  }

  return (
    <>
      <div className='container flexContainer'>
        <Heading size='lg' mt='' mb='10'>
          My Orders
        </Heading>
        <input
          style={{background: "#fff !important", width: "50%;"}}
          type='text'
          placeholder='Search for Items'
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </div>
      <DataTable data={search(data)} />
    </>
  )
}
