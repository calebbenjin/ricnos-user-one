import { Box, Spinner, Text } from "@chakra-ui/react";

export default function BlankMessageLayout({ message, loading, error }) {
  return (
    <Box
      w="100%"
      h="90vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {loading ? (
        <Spinner color="red.500" size="xl" />
      ) : error ? (
        <Text>{message}</Text>
      ) : null}
    </Box>
  );
}
