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
          If you have a website or mobile app idea in mind or you need some
          advice about frontend/backend development, feel free to contact me.
          Currently my time books quickly, so the sooner you write, the better
          it is for both of us.
        </Text>
        <HStack spacing={2} justify="center" mb={8}>
          <Avatar name="Anthony Lau" src="">
            <AvatarBadge boxSize="1em" bg="green.500" />
          </Avatar>
          <Text>
            <b>Reply time:</b> within 1-2 working days
          </Text>
        </HStack>
        <Button variant="solid" colorScheme="purple" mb={6}>
          <Link as="a" href="mailto:anty1025@gmail.com">
            anty1025@gmail.com
          </Link>
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
