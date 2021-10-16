import React, { useState, useContext } from 'react';

import DataTable from './DataTable';
import { Heading } from '@chakra-ui/react';
import AuthContext from '@/context/AuthContext';

export default function OrdersTable({ orders }) {
  const [q, setQ] = useState('');
  const [filterBtn, setFilterBtn] = useState(['A']);
  const [loading, setLoading] = useState(true);

  const { user } = useContext(AuthContext);

  function search(rows) {
    const columns = rows[0] && Object.keys(rows[0]);

    return rows.filter((row) =>
      columns.some(
        (column) =>
          row[column].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
      )
    );
  }

  return (
    <>
      <div className="container flexContainer">
        <Heading size="lg" mt="" mb="10">
          My Orders
        </Heading>
        <input
          style={{ background: '#fff !important', width: '50%;' }}
          type="text"
          placeholder="Search for Items"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </div>
      {orders && <DataTable data={orders} />}
    </>
  );
}
