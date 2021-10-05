import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {
  Avatar,
  Box,
  Button,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
} from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"
const Header = ({ siteTitle }) => (
  <Box
    pos="fixed"
    borderBottom="1px solid rgba(0,0,0,.05)"
    zIndex="10"
    w="100%"
    top="0"
    bg="rgba(255,255,255,.99)"
  >
    <Box
      d="flex"
      alignItems="center"
      maxW={1100}
      mx="auto"
      py={2}
      px={[6, 12, 12, 12, null]}
    >
      <Box>
        <Link to="/">
          {/* https://image.flaticon.com/icons/png/512/826/826963.png */}
          <Avatar src="../../6072.gif" />
        </Link>
      </Box>
      <Spacer />
      <Box display={{ base: "none", md: "block" }}>
        <HStack spacing={2} align="center">
          <Link to="/">
            <Button variant="ghost">Home</Button>
          </Link>
          {/*<Link to="/404">
            <Button variant="ghost">Projects</Button>
          </Link>*/}
          <Link to="/contact">
            <Button variant="solid" colorScheme="purple" lineHeight="1">
              Say hello to me
            </Button>
          </Link>
        </HStack>
      </Box>
      <Box display={{ base: "block", md: "none" }}>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            size="md"
            variant="outline"
          />
          <MenuList>
            <MenuItem>
              <Link to="/">Home</Link>
            </MenuItem>
            {/*<MenuItem>
              <Link to="/404">Projects</Link>
            </MenuItem>*/}
            <MenuItem>
              <Link to="/contact">Contact me</Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  </Box>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
