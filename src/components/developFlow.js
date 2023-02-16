import { Box, Button, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react"
import { Link } from "gatsby"
import React from "react"
import { Fade } from "react-reveal"

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
        <Fade bottom duration={1000} delay={300}>
          <Text size="xs" textTransform="uppercase" opacity="0.4">
            Develop Flow
          </Text>
        </Fade>
        <Fade bottom duration={1000} delay={400}>
          <Heading size="xl" my={2}>
            Gather. Analysis. Implement. Iterate.
          </Heading>
        </Fade>
        <Fade bottom duration={1000} delay={500}>
          <Text opacity="0.6" fontSize="lg">
            Gather requirements, analyze the user journey, implement efficient
            codes, continue to review and maintain high quality maintenance
            service.
          </Text>
        </Fade>
      </Box>

      <Fade bottom duration={1000} delay={500}>
        <Box flex="1" textAlign="right">
          <Link
            to="https://asqn4tleha0.typeform.com/to/hspdVbPc"
            target="_blank"
          >
            <Button colorScheme="purple">Start a Project</Button>
          </Link>
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
      </Fade>
    </Stack>
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      spacing={16}
      pb={{ base: "70px", md: "140px" }}
      pt={{ base: "20px", md: "40px" }}
    >
      <Fade bottom duration={1000} delay={500}>
        <Box>
          <Heading size="xl" my={2}>
            Gather
          </Heading>
          <Text fontSize="lg">
            <b>Ask first.</b> Before jumping into designing I always make sure
            that we’re asking the right questions and trying to accomplish the
            right challenges. This stage includes market research, competitive
            analyses, consulting and exploring possible solutions.
          </Text>
        </Box>
      </Fade>
      <Fade bottom duration={1000} delay={600}>
        <Box>
          <Heading size="xl" my={2}>
            Analysis
          </Heading>
          <Text fontSize="lg">
            <b>Problem solving.</b> At the end of this phase you’ll have a clear
            understanding on the user flow for your app or website. While
            considering the designer's transition from wireframes into the final
            design I create prototypes simulating final results in between to
            speed up my preparation.
          </Text>
        </Box>
      </Fade>
      <Fade bottom duration={1000} delay={700}>
        <Box>
          <Heading size="xl" my={2}>
            Implement
          </Heading>
          <Text fontSize="lg">
            <b>Bringing designs to life.</b> After communicating with designers
            and finalizing the actual design, I can then easily work in close
            collaboration with other developers and make sure the job gets done.
            In case of web projects I also do back-end development.
          </Text>
        </Box>
      </Fade>
      <Fade bottom duration={1000} delay={800}>
        <Box>
          <Heading size="xl" my={2}>
            Iterate
          </Heading>
          <Text fontSize="lg">
            <b>Transparent process</b>. Complete overview of my development
            process through regular meetings. After the initial prototype is
            completed I’m happy to do user testing with your customers to ensure
            the best possible solutions for their needs.
          </Text>
        </Box>
      </Fade>
    </SimpleGrid>
  </Box>
)

export default developFlow
