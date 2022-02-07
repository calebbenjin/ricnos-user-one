import React, { useState, useEffect } from 'react'
import DataTable from './DataTable'
import { BiPrinter, BiSearchAlt } from 'react-icons/bi';
import { Flex, Stack, Button, Input, Heading, InputLeftElement, InputGroup } from '@chakra-ui/react'

export default function OrdersTable({ orders }) {
  const columns = ['id', 'trackNo', 'agent', 'item', 'from', 'to', 'status', 'price'];
  const [newData, setNewData] = useState(orders.map(order => ({
    id: order.id,
    trackNo: `#${order.tracking_id}`,
    agent: order.admins.pickup_agent,
    item: order.items.length > 1 ? order.items.reduce((prev, cur) => `${prev.item}, ${cur.item},`) : order?.items?.[0]?.item || "",
    from: order.departure,
    to: order.arrival,
    status: order.status,
    price: `NGN ${order.amount}`,
})));
  const [q, setQ] = useState('')
  const [filterBtn, setFilterBtn] = useState('all')

  function search(rows) {
    // const columns = rows[0] && Object.keys(rows[0])
    return rows.filter((row) => columns.some((column) => row[column].toString().toLowerCase().includes(q.toLowerCase())
    )
    )
  }


  return (
    <>
      <div className='container flexContainer'>
        <Heading size='lg' mt='' mb='10'>
          My Orders
        </Heading>
        <Flex>
          <InputGroup mr="4" bg="white">
            <InputLeftElement pointerEvents='none'>
            <BiSearchAlt style={{ fontSize: "1.2rem", color: "gray"}} />
            </InputLeftElement>
            <Input type='text' _focus={{paddingLeft: "2.2rem"}} value={q} onChange={(e) => setQ(e.target.value)} placeholder='Search' />
          </InputGroup>
          <Stack spacing={0} direction='row' align='center'>
            <Button borderRadius='0' variant='outline' bg="white" leftIcon={<BiPrinter />} onClick={() => setFilterBtn('all')}>All</Button>
            <Button borderRadius='0' variant='outline' bg="white" leftIcon={<BiPrinter />} onClick={() => setFilterBtn('from')}>From</Button>
            <Button borderRadius='0' variant='outline' bg="white" leftIcon={<BiPrinter />} onClick={() => setFilterBtn('phone')}>Phone</Button>
            <Button borderRadius='0' variant='outline' bg="white" leftIcon={<BiPrinter />} onClick={() => setFilterBtn('date')}>
              Date
            </Button>
            <Button borderRadius='0' variant='outline' bg="white" leftIcon={<BiPrinter />} onClick={() => setFilterBtn('email')}>
              Email
            </Button>
          </Stack>
        </Flex>
      </div>
      <DataTable columns={columns} data={search(newData)} />
    </>
  )
}
