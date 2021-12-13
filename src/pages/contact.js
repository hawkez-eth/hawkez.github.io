import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react"
import { Link } from "gatsby"
import React from "react"
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import Header from "../components/header"

const contact = () => (
  <>
    <Header />
    <Box mx="auto" maxW={1100} p={[6, 12, 12, 12, null]} mt={20} mb={10}>
      <Stack
        pt={{ base: "70px", md: "120px" }}
        pb={{ base: "20px", md: "40px" }}
        textAlign="center"
        spacing={6}
        maxW="600px"
        mx="auto"
      >
        <Text size="xs" textTransform="uppercase" opacity="0.4">
          What's in your mind?
        </Text>
        <Heading size="3xl" my={2}>
          Let's talk about you
        </Heading>
        <Text fontSize={{ base: "lg", md: "2xl" }}>
          If you have a project in mind or you just want to chat, feel free to
          get in touch. Currently my time books quickly, so the sooner you
          write, the better it is for both of us.
        </Text>
        <Box>
          <Button colorScheme="purple">
            <Link to="mailto:anty1025@gmail.com">anty1025@gmail.com</Link>
          </Button>
        </Box>
      </Stack>
      <Stack
        pt={{ base: "70px", md: "120px" }}
        pb={{ base: "20px", md: "40px" }}
        textAlign="center"
        spacing={6}
        maxW="600px"
        mx="auto"
      >
        <Text size="xs" textTransform="uppercase" opacity="0.4">
          How I work
        </Text>
        <Heading size="xl" my={2}>
          Profitable development
        </Heading>
        <Text fontSize="xl" textAlign="left">
          As a developer with business background I’m always focusing on
          creating experiences, which are pleasant and profitable at the same
          time. I start every job with detailed questions about your business
          and customers before I even start thinking about any digital
          solutions.
        </Text>
      </Stack>
      <Stack
        pb={{ base: "70px" }}
        pt={{ base: "20px", md: "40px" }}
        textAlign="center"
        spacing={6}
      >
        <Text fontSize="xl">
          You can also just send me an <b>email</b> or a <b>tweet</b>.
        </Text>
        <Box>
          <Button colorScheme="purple" variant="ghost" size="lg">
            <Link fontSize="2xl" to="mailto:anty1025@gmail.com">
              <Text fontSize="2xl">anty1025@gmail.com</Text>
            </Link>
          </Button>
        </Box>
      </Stack>
    </Box>
    <Box p={8} color="#000">
      <Container maxW="container.lg">
        <HStack align="center" justify="center" spacing={8}>
          <Link to="https://github.com/saltyMilkis" target="_blank">
            <IconButton
              size="lg"
              variant="ghost"
              colorScheme="purple"
              icon={<FaGithub />}
            ></IconButton>
          </Link>

          <Link
            to="https://www.linkedin.com/in/anthony-lau-201749146/"
            target="_blank"
          >
            <IconButton
              size="lg"
              variant="ghost"
              colorScheme="purple"
              icon={<FaLinkedin />}
            ></IconButton>
          </Link>

          <Link to="https://twitter.com/0xDevAnt" target="_blank">
            <IconButton
              size="lg"
              variant="ghost"
              colorScheme="purple"
              icon={<FaTwitter />}
            ></IconButton>
          </Link>
        </HStack>
        <Text fontSize="xs" opacity=".6" textAlign="center">
          © {new Date().getFullYear()}, All rights reserved. – Designed &amp;
          Coded by Anthony Lau
        </Text>
      </Container>
    </Box>
  </>
)

export default contact
