import { Box, Flex, Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";

import regeneratorRuntime from "regenerator-runtime";

import styles from "@/styles/Table.module.css";

export const OrdersTableFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);
  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 400);

  return (
    <Box
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      justifyContent="space-between"
      gap="3"
    >
      <Input
        w={{ base: "100%", md: "40%" }}
        type="text"
        placeholder="Search for Items"
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
      />

      <Flex flexDirection="row" wrap="wrap">
        <Button
          backgroundColor="#ffffff"
          borderRadius="0"
          variant="outline"
          fontSize="xs"
          fontweight="0"
          onClick={() => setFilter("")}
        >
          All
        </Button>
        <Button
          backgroundColor="#ffffff"
          borderRadius="0"
          fontSize="xs"
          variant="outline"
          onClick={() => setFilter("pending")}
        >
          Pending
        </Button>
        <Button
          backgroundColor="#ffffff"
          borderRadius="0"
          fontSize="xs"
          variant="outline"
          onClick={() => setFilter("paid")}
        >
          Paid
        </Button>
        <Button
          backgroundColor="#ffffff"
          borderRadius="0"
          fontSize="xs"
          variant="outline"
          onClick={() => setFilter("in progress")}
        >
          In Progress
        </Button>
        <Button
          backgroundColor="#ffffff"
          borderRadius="0"
          fontSize="xs"
          variant="outline"
          onClick={() => setFilter("completed")}
        >
          Completed
        </Button>
      </Flex>
    </Box>
  );
};
