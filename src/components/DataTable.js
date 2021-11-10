import React from 'react'
import Link from 'next/link'
import { Heading, Box } from '@chakra-ui/react'

export default function DataTable({ data }) {
  return (
    <div className='resTable'>
      {data ? (
        <>
          <table cellPadding={0} cellSpacing={0}>
            <thead>
              <tr>
                <th data-label='Agent' scope='col'>
                  Agent
                </th>
                <th data-label='Track No' scope='col'>
                  Track No
                </th>
                <th data-label='Item' scope='col'>
                  Item
                </th>
                <th data-label='From' scope='col'>
                  From
                </th>
                <th data-label='To' scope='col'>
                  To
                </th>
                <th data-label='Status' scope='col'>
                  Status
                </th>
                <th data-label='Price' scope='col'>
                  Price
                </th>
              </tr>
            </thead>
          </table>
          <Box width={'100%'} textAlign='center'>
            <Heading mt='8' size='md'>
              You have no available orders
            </Heading>
          </Box>
        </>
      ) : (
        <table cellPadding={0} cellSpacing={0}>
          <thead>
            <tr>
              <th data-label='Agent' scope='col'>
                Agent
              </th>
              <th data-label='Track No' scope='col'>
                Track No
              </th>
              <th data-label='Item' scope='col'>
                Item
              </th>
              <th data-label='From' scope='col'>
                From
              </th>
              <th data-label='To' scope='col'>
                To
              </th>
              <th data-label='Status' scope='col'>
                Status
              </th>
              <th data-label='Price' scope='col'>
                Price
              </th>
            </tr>
          </thead>

          <tbody>
            <>
              {data.map((row, i) => (
                <tr key={i}>
                  <td> No Agent </td>
                  <td>
                    <Link href={`/dashboard/pickup/${row.id}/confirm`}>
                      <a>#{row.tracking_id}</a>
                    </Link>
                  </td>
                  <td> {row.items.map((item) => `${item.item}, `)} </td>
                  <td> {row.departure} </td>
                  <td> {row.arrival} </td>
                  <td> {row.status} </td>
                  <td> NGN {row.amount} </td>
                </tr>
              ))}
            </>
          </tbody>
        </table>
      )}
    </div>
  )
}
