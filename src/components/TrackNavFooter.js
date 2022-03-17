import { Stack, Flex, Spacer, Box, Container, Text } from "@chakra-ui/react";
import styles from "@/styles/NavFooter.module.css";
import Link from "next/link";

export default function NavFooter() {
  return (
    <Box className={styles.navFooterTrack}>
      <Container maxWidth="container.xl">
        <Flex>
          <Stack direction="row" spacing={4}>
            <Text as="span" fontSize="xs">
              CALL : (+234)000 000 0000
            </Text>
            <Text as="span" fontSize="xs">
              EMAIL : info@ricmoslogistics.com
            </Text>
            <Text as="span" fontSize="xs">
              MONDAYS - SUNDAYS
            </Text>
          </Stack>
          <Spacer />
          <Stack spacing={6} direction="row">
            <Text fontSize="sm">
              <Link href="/login">
                <a>LOGIN</a>
              </Link>
            </Text>
            <Text fontSize="sm">
              <Link href="/signup">
                <a>SIGN UP</a>
              </Link>
            </Text>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
}
