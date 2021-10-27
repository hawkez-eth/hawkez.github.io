import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react"
import React from "react"

const designNature = () => (
  <Stack
    direction={{ base: "column", md: "row" }}
    spacing={8}
    py={{ base: "70px", md: "140px" }}
  >
    <Box flex="1">
      <Image
        borderRadius="4px"
        width="100%"
        boxShadow="0 1px 2px rgb(0 0 0 / 5%), 0 10px 20px rgb(0 0 0 / 5%)"
        transition=".8s cubic-bezier(.2,.8,.2,1)"
        _hover={{
          transform: "translateY(-5px)",
          boxShadow: "0 1px 2px rgb(0 0 0 / 5%), 0 15px 30px rgb(0 0 0 / 10%)",
        }}
        src="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
        alt="Clean"
      />
    </Box>

    <Box flex="1">
      <Text size="xs" textTransform="uppercase" opacity="0.4">
        Design Nature
      </Text>
      <Heading
        transition=".8s cubic-bezier(.2,.8,.2,1)"
        _groupHover={{ color: "#6832e6" }}
        size="lg"
        my={2}
      >
        Simple yet beautiful.
      </Heading>
      <Text opacity="0.6">
        Daily duty to write Human-Understandable codes with the neatest and
        cleanest manner possible, it's my responsibility to strive for the
        balance between Functionality and Usability.
      </Text>
    </Box>
  </Stack>
)
export default designNature
