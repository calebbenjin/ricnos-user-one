import React, { useMemo, useContext } from "react";
import { useRouter } from "next/router";
import { useTable, useGlobalFilter, usePagination } from "react-table";
import { Box, Text, Select, Button, Flex, Heading } from "@chakra-ui/react";
import AuthContext from "@/context/AuthContext";
import { COLUMNS } from "@/localData/orderColumn";
import { OrdersTableFilter } from "@/components/OrdersTableFilter";
import styles from "@/styles/Table.module.css";

export default function OrdersTable({ orderData }) {
  const { user } = useContext(AuthContext);

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => orderData, []);

  const router = useRouter();

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    state,
    setGlobalFilter,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    usePagination
  );

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <>
      <div className="container flexContainer">
        <Heading size="lg" mt="" mb="10">
          My Orders
        </Heading>
        <OrdersTableFilter filter={globalFilter} setFilter={setGlobalFilter} />
      </div>
      <Box my="5">
        <Box
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          mx="5"
          gap="3"
        >
          <Text fontSize="sm">
            Showing {page[0]?.index + 1} - {page[page.length - 1]?.index + 1} of{" "}
            {data.length} results
          </Text>
          <Box
            display="flex"
            w="fit-content"
            alignItems="center"
            gap="2"
            mb="2"
          >
            <Text fontSize="sm">Results per page: </Text>
            <Select
              size="sm"
              w="15"
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
            >
              {[10, 25, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  {pageSize}
                </option>
              ))}
            </Select>
          </Box>
        </Box>
        <div className="resTable">
          <table {...getTableProps()} cellPadding={0} cellSpacing={0}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th key={column.id} {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row) => {
                prepareRow(row);
                return (
                  <tr
                    key={row.id}
                    {...row.getRowProps()}
                    onClick={() =>
                      router.push(
                        `/dashboard/pickup/${row.original.id}/confirm`
                      )
                    }
                  >
                    {row.cells.map((cell) => {
                      return (
                        <td key={cell.id} {...cell.getCellProps()}>
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
          <Box
            display="flex"
            justifyContent="flex-end"
            gap="3"
            my="2"
            mx="5"
            alignItems="center"
          >
            <Button
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
              size="sm"
              variant="ghost"
            >
              Previous
            </Button>
            <Flex>
              <p>
                <span style={{ fontWeight: "bold" }}>{pageIndex + 1} </span> of{" "}
                <span style={{ fontWeight: "bold" }}>{pageOptions.length}</span>
              </p>
            </Flex>
            <Button
              onClick={() => nextPage()}
              disabled={!canNextPage}
              size="sm"
              variant="ghost"
            >
              Next
            </Button>
          </Box>
        </div>
      </Box>
    </>
  );
}
