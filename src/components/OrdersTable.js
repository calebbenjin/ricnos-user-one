import React, { useState } from 'react'
import DataTable from './DataTable'
import { Heading, Input } from '@chakra-ui/react'
import styles from '@/styles/Table.module.css'

export default function OrdersTable({ orders }) {
  const columns = ['id', 'trackNo', 'date', 'agent', 'item', 'from', 'to', 'status', 'price'];
  const [newData, setNewData] = useState(orders.map(order => ({
    id: order.id,
    trackNo: `#${order.tracking_id}`,
    agent: order.admins.pickup_agent,
    item: order.items.length > 1 ? order.items.reduce((prev, cur) => `${prev.item}, ${cur.item},`) : order?.items?.[0]?.item || "",
    from: order.departure,
    to: order.arrival,
    status: order.status,
    price: `NGN ${order.amount}`,
})))
  const [q, setQ] = useState('')
  const [filterBtn, setFilterBtn] = useState(['A'])
  const [loading, setLoading] = useState(true)

  

  function search(rows) {
    // const columns = rows[0] && Object.keys(rows[0])
    return rows.filter((row) => columns.some((column) => row[column].toString().toLowerCase().includes(q.toLowerCase())
    )
    )
  }

  // function search(rows) {
  //   // Filtering by trackingID
  //   // console.log(rows)
  //   return rows.filter((row) => row.tracking_id.toLowerCase().includes(q.toLowerCase()) || row.items?.filter(item => item.item.toLowerCase().includes(q.toLowerCase())).length);
  // }

  return (
    <>
      <div className='container flexContainer'>
        <Heading size='lg' mt='' mb='10'>
          My Orders
        </Heading>
        <input
          className={styles.search}
          type='text'
          placeholder='Search for Items'
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </div>
      {newData && <DataTable columns={columns} data={search(newData)} />}
    </>
  )
}
