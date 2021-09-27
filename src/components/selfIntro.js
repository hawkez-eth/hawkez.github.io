import { Box, Button, Heading, Stack, Text, VStack } from "@chakra-ui/react"
import { Link } from "gatsby"
import React from "react"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

const selfIntro = () => (
  <Stack
    id="self-intro"
    direction={{ base: "column", md: "row" }}
    spacing={8}
    mb={20}
    pt={{ base: "70px", md: "140px" }}
    align={{ base: "left", md: "center" }}
  >
    <Box flex="1">
      <Text size="xs" textTransform="uppercase" opacity="0.4">
        Nice to meet you
      </Text>
      <Heading size="2xl" mt={2} mb={8}>
        Hi there, I’m Ant
      </Heading>
      <Stack spacing={6}>
        <Text fontSize="xl">
          My name is Anthony Lau. I work as a Front-end &amp; Back-end developer
          primarily based in Hong Kong.
        </Text>
        <Text fontSize="xl">
          Currently, I’m developing and maintaining the official website for
          SOUL Electronics with an incredible team. Previously, I was a Full
          Stack Web Developer at InfinMedia.
        </Text>
        <Text fontSize="xl">
          As a professional web developer for around three years, I never stop
          trying to learn new skills or chase for a better approach of writing
          high quality codes, and I still have a thirst for revolutionary
          technology like blockchain or crypto. Afterall I’m passionate about
          building delightful experiences with the combination of high-end,
          delicate UI/UX design and simple-to-use features to make customers and
          users satisfied when they’re using the applications I built.
        </Text>
      </Stack>
    </Box>
    <Box flex="1" textAlign={{ base: "left", md: "right" }}>
      <Heading size="md">Stay up-to-date</Heading>
      <Text fontSize="xs" my={2}>
        <b>Hint:</b> I’m especially active on Linkedin.
      </Text>

      <Box mr={{ base: null, md: "-16px" }} ml={{ base: "-16px", md: null }}>
        <Link to="https://github.com/saltyMilkis" target="_blank">
          <Button variant="ghost" colorScheme="purple" leftIcon={<FaGithub />}>
            Github
          </Button>
        </Link>
      </Box>

      <Box mr={{ base: null, md: "-16px" }} ml={{ base: "-16px", md: null }}>
        <Link
          to="https://www.linkedin.com/in/anthony-lau-201749146/"
          target="_blank"
        >
          <Button
            variant="ghost"
            colorScheme="purple"
            leftIcon={<FaLinkedin />}
          >
            Linkedin
          </Button>
        </Link>
      </Box>

      {/*<Box mr={{ base: null, md: "-16px" }} ml={{ base: "-16px", md: null }}>
        <Link to="" target="_blank">
          <Button
            variant="ghost"
            colorScheme="purple"
            leftIcon={<FaFacebook />}
          >
            Facebook
          </Button>
        </Link>
      </Box> */}

      <Box mr={{ base: null, md: "-16px" }} ml={{ base: "-16px", md: null }}>
        <Link to="https://twitter.com/saltyMilkis" target="_blank">
          <Button variant="ghost" colorScheme="purple" leftIcon={<FaTwitter />}>
            Twitter
          </Button>
        </Link>
      </Box>
    </Box>
  </Stack>
)

export default selfIntro
