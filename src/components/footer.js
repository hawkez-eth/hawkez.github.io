import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Text,
} from "@chakra-ui/react"
import { Link } from "gatsby"
import React from "react"

const Footer = () => (
  <Box mt={4} p={8} bg="#000" color="#fff">
    <Container maxW="container.lg">
      <Box textAlign="center" my={20}>
        <Heading mb={6} size="3xl">
          Let's work together
        </Heading>
        <Text mb={8} fontSize="xl">
          Whether you already have something big cooking behind the scene, or
          any ideas that come to your mind but you don't know how to actually
          implement it, and want some consultations on either the{" "}
          <b>protocol design</b>, or the{" "}
          <b>tech development of frontend/backend/smart contract</b>, or even an{" "}
          <b>NFT launch</b>, feel free to contact me.
        </Text>
        <HStack spacing={2} justify="center" mb={8}>
          <Avatar name="Anthony Lau" src="../../tornado-cash-logo.png">
            <AvatarBadge boxSize="1em" bg="green.500" />
          </Avatar>
          <Text>
            <b>Reply time:</b> within 1-2 working days
          </Text>
        </HStack>
        <Button variant="solid" colorScheme="purple" mb={6}>
          <a href="mailto:anty1025@gmail.com">anty1025@gmail.com</a>
        </Button>
      </Box>
      <Text fontSize="xs" opacity=".6" textAlign="center">
        © {new Date().getFullYear()}, All rights reserved. – Developed by
        Anthony Lau
      </Text>
    </Container>
  </Box>
)

export default Footer
