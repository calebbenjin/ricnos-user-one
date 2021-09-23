import { Heading } from "@chakra-ui/react";


export default function SectionHeader({sub, title}) {
  return (
    <>
      <Heading size="sm" color="red.500" mb={4}>{sub}</Heading>
      <Heading size="lg" mb={10}>{title}</Heading>
    </>
  )
}
