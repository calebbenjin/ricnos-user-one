import React, { useState, useEffect } from 'react';
import DataTable from './DataTable';
import { Heading, Input, Button } from '@chakra-ui/react';
import styles from '@/styles/Table.module.css';

export default function OrdersTable({ orders }) {
  // const columns = ['id', 'trackNo', 'date', 'agent', 'item', 'from', 'to', 'status', 'price'];
  //   const [newData, setNewData] = useState(orders.map(order => ({
  //     id: order.id,
  //     trackNo: `#${order.tracking_id}`,
  //     agent: order.admins.pickup_agent,
  //     item: order.items.length > 1 ? order.items.reduce((prev, cur) => `${prev.item}, ${cur.item},`) : order?.items?.[0]?.item || "",
  //     from: order.departure,
  //     to: order.arrival,
  //     status: order.status,
  //     price: `NGN ${order.amount}`,
  // })))
  const [q, setQ] = useState('');
  const [filterBtn, setFilterBtn] = useState('all');
  const [loading, setLoading] = useState(true);

  const [orderData, setOrderData] = useState(orders);

  useEffect(() => {
    if (filterBtn === 'all') {
      setOrderData(orders);
    } else if (filterBtn === 'pending') {
      setOrderData(orders.filter((order) => order.integer_status === '-1'));
    } else if (filterBtn === 'pending/paid') {
      setOrderData(orders.filter((order) => order.integer_status === '0'));
    }
  }, [filterBtn]);

  // function search(rows) {
  //   // const columns = rows[0] && Object.keys(rows[0])
  //   return rows.filter((row) => columns.some((column) => row[column].toString().toLowerCase().includes(q.toLowerCase())
  //   )
  //   )
  // }

  // function search(rows) {
  //   // Filtering by trackingID
  //   // console.log(rows)
  //   return rows.filter((row) => row.tracking_id.toLowerCase().includes(q.toLowerCase()) || row.items?.filter(item => item.item.toLowerCase().includes(q.toLowerCase())).length);
  // }

  return (
    <>
      <div className="container flexContainer">
        <Heading size="lg" mt="" mb="10">
          My Orders
        </Heading>
        <input
          className={styles.search}
          type="text"
          placeholder="Search for Items"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            padding: '8px 0',
          }}
        >
          <Button
            colorScheme={filterBtn === 'all' ? 'red' : 'blackAlpha'}
            mt="4"
            ml="8"
            mr="4"
            size="sm"
            onClick={() => setFilterBtn('all')}
          >
            All
          </Button>
          <Button
            colorScheme={filterBtn === 'pending' ? 'red' : 'blackAlpha'}
            mt="4"
            size="sm"
            mr="4"
            onClick={() => setFilterBtn('pending')}
          >
            Pending
          </Button>
          <Button
            colorScheme={filterBtn === 'pending/paid' ? 'red' : 'blackAlpha'}
            mt="4"
            size="sm"
            mr="4"
            onClick={() => setFilterBtn('pending/paid')}
          >
            Paid
          </Button>
        </div>
      </div>
      <DataTable data={orderData} />
    </>
  );
}
