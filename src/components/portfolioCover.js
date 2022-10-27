import React from "react"
import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react"
import { Fade, Zoom } from "react-reveal"

const portfolioCover = () => (
  <Stack
    direction={{ base: "column", md: "row" }}
    spacing={8}
    mb={{ base: "70px", md: "140px" }}
    align="center"
  >
    <Box flex="1">
      <Stack spacing={8}>
        <Fade bottom delay={100}>
          <Heading as="h1" size="3xl">
            Web & Blockchain Developer
          </Heading>
        </Fade>
        <Fade bottom delay={200}>
          <Text fontSize="xl">
            Currently a Senior Blockchain Developer at{" "}
            <Link
              color="#805AD5"
              href="https://quantblock.com/"
              target="_blank"
            >
              QuantBlock
            </Link>{" "}
            developing several novel Defi & NFT
            projects on Ethereum & Polkadot. Previously at{" "}
            <Link
              color="#805AD5"
              href="https://soulnation.com/"
              target="_blank"
            >
              SOUL®️ as Head Of Blockchain
            </Link>
            .
          </Text>
        </Fade>
        <Fade bottom delay={300}>
          <Box>
            <Button
              colorScheme="purple"
              onClick={() =>
                document
                  .querySelector("#develop-flow")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Get Started
            </Button>
          </Box>
        </Fade>
      </Stack>
      <HStack spacing={2} justify="left" my={{ base: 8, md: 16 }}>
        <Fade bottom delay={400}>
          <Avatar name="Anthony Lau" src="../../bobu.png">
            <AvatarBadge boxSize="1em" bg="green.500" />
          </Avatar>
          <Text fontSize="14px">
            <b>Reply time:</b> within 1-2 working days
          </Text>
        </Fade>
      </HStack>
    </Box>

    <Box flex="1" textAlign="right">
      <Zoom duration={1200} delay={500}>
        <Image
          borderRadius="4px"
          width="100%"
          boxShadow="0 1px 2px rgb(0 0 0 / 5%), 0 10px 20px rgb(0 0 0 / 5%)"
          transition=".8s cubic-bezier(.2,.8,.2,1)"
          _hover={{
            transform: "translateY(-5px)",
            boxShadow:
              "0 1px 2px rgb(0 0 0 / 5%), 0 15px 30px rgb(0 0 0 / 10%)",
          }}
          src="https://images.unsplash.com/photo-1506506200949-df8644f002d1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          alt="Cover Image for Portfolio"
        />
      </Zoom>
    </Box>
  </Stack>
)
export default portfolioCover
