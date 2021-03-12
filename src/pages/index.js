import React from "react"
import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
import { Divider } from "@chakra-ui/react"
import ProjectGallery from "../components/projectGallery"
import DesignNature from "../components/designNature"
import DevelopFlow from "../components/developFlow"
import SelfIntro from "../components/selfIntro"
import PortfolioCover from "../components/portfolioCover"
import { Fade } from "react-reveal"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PortfolioCover />
    <DevelopFlow />
    <Divider d={{ base: "none", md: "block" }} />
    <Fade bottom duration={1500}>
      <DesignNature />
    </Fade>
    <Divider d={{ base: "none", md: "block" }} />
    <ProjectGallery />
    <Divider d={{ base: "none", md: "block" }} />
    <Fade bottom duration={1500}>
      <SelfIntro />
    </Fade>
  </Layout>
)

export default IndexPage
