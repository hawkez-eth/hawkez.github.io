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
        Howdy
      </Text>
      <Heading size="2xl" mt={2} mb={8}>
        I’m Ant
      </Heading>
      <Stack spacing={6}>
        <Text fontSize="xl">
          My name is Anthony Lau. I work as a Full Stack Web & Blockchain
          developer based in Hong Kong.
        </Text>
        <Text fontSize="xl">
          Currently, I’m building reliable decentralized applications(DApps) on
          Ethereum and Polkadot by developing smart contracts in Solidity with
          an incredible team. Previously, I was Head Of Blockchain at SOUL®️.
        </Text>
        <Text fontSize="xl">
          As a professional web developer for over three years, I never stop
          trying to keep up with new skillset and to chase for a better approach
          of writing quality codes, not to mention how more curious I become
          after learning about emerging technologies like blockchain, crypto,
          DeFi and NFT. Throughout my career, the more I discover and absorb
          from understanding different aspects of website and blockchain
          technology, the more I found how vast this ocean could be. With that
          being said, I am confident to say that I just found myself become
          nothing but more eager than ever to dig deeper and deeper, and my goal
          will always stay the same, keep learning as long as I am curious. So,
          feel free to contact me if you are looking for an open-minded
          visionary but at the same time a responsible and competent executor
          who has a huge belief in blockchain and crypto.
        </Text>
      </Stack>
    </Box>
    <Box flex="1" textAlign={{ base: "left", md: "right" }}>
      <Heading size="md">Stay up-to-date</Heading>
      <Text fontSize="xs" my={2}>
        <b>Hint:</b> I’m especially active on Linkedin.
      </Text>

      <Box mr={{ base: null, md: "-16px" }} ml={{ base: "-16px", md: null }}>
        <Link to="https://github.com/0xdevant" target="_blank">
          <Button variant="ghost" colorScheme="purple" leftIcon={<FaGithub />}>
            Github
          </Button>
        </Link>
      </Box>

      <Box mr={{ base: null, md: "-16px" }} ml={{ base: "-16px", md: null }}>
        <Link to="https://www.linkedin.com/in/ant-web3/" target="_blank">
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
        <Link to="https://twitter.com/0xDevAnt" target="_blank">
          <Button variant="ghost" colorScheme="purple" leftIcon={<FaTwitter />}>
            Twitter
          </Button>
        </Link>
      </Box>
    </Box>
  </Stack>
)

export default selfIntro
