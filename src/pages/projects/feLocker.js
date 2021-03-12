import { Box, Button, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react"
import { Link } from "gatsby"
import React from "react"

const developFlow = () => (
  <Box>
    <Stack
      direction={{ base: "column", md: "row" }}
      spacing={8}
      pt={{ base: "70px", md: "140px" }}
      pb={{ base: "20px", md: "40px" }}
      align="center"
      id="develop-flow"
    >
      <Box flex="1">
        <Text size="xs" textTransform="uppercase" opacity="0.4">
          Develop Flow
        </Text>
        <Heading size="xl" my={2}>
          Gather. Analysis. Implement. Continue.
        </Heading>
        <Text opacity="0.6" fontSize="lg">
          Always trying to write efficient code at the most neat and clean
          manner, also always strive for a balance between readibility and
          speciality.
        </Text>
      </Box>
      <Box flex="1" textAlign="right">
        <Button colorScheme="purple">
          <Link to="#project-gallery">Start a Project</Link>
        </Button>
        <Button
          colorScheme="purple"
          variant="outline"
          ml={6}
          onClick={() =>
            document
              .querySelector("#project-gallery")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Learn more
        </Button>
      </Box>
    </Stack>
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      spacing={16}
      pb={{ base: "70px", md: "140px" }}
      pt={{ base: "20px", md: "40px" }}
    >
      <Box>
        <Heading size="xl" my={2}>
          Strategy
        </Heading>
        <Text fontSize="lg">
          <b>Ask first.</b> Before jumping into designing I always make sure
          that we’re asking the right questions and trying to accomplish the
          right challenges. This stage includes market research, competitive
          analyses, consulting and exploring possible solutions.
        </Text>
      </Box>
      <Box>
        <Heading size="xl" my={2}>
          Design
        </Heading>
        <Text fontSize="lg">
          <b>Problem solving.</b> At the end of this phase you’ll have a pixel
          perfect design for your app or website. During the transition from
          wireframes into the final design I create prototypes simulating final
          end results before development.
        </Text>
      </Box>
      <Box>
        <Heading size="xl" my={2}>
          Development
        </Heading>
        <Text fontSize="lg">
          <b>Bringing designs to life.</b> Since I’m a designer who can code
          too, I can easily work in close collaboration with developers up until
          the finish line and beyond. In case of web projects I also do
          front-end development.
        </Text>
      </Box>
      <Box>
        <Heading size="xl" my={2}>
          Debug
        </Heading>
        <Text fontSize="lg">
          <b>Transparent process</b>. Complete overview of my design process
          through regular meetings. After the initial design versions I’m happy
          to do user testing with your customers to ensure the best possible
          solutions for their needs.
        </Text>
      </Box>
    </SimpleGrid>
  </Box>
)

export default developFlow
