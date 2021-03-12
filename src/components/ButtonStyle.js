import { Button } from "@chakra-ui/react"
import React from "react"

const hoverButton = {
  boxShadow:
    "inset 0 -1px 0 rgb(0 0 0 / 10%), 0 1px 2px rgb(28 35 139 / 10%), 0 2px 5px rgb(41 52 204 / 20%)",
  transition: ".3s ease",
  _hover: {
    boxShadow:
      "inset 0 -1px 0 rgb(0 0 0 / 10%), 0 2px 6px rgb(0 0 0 / 5%), 0 7px 14px rgb(28 35 139 / 15%)",
    transform: "translateY(-1px)",
  },
}

const ButtonStyle = props => {
  const { children } = props
  return (
    <Button
      size={props.size ? props.size : "md"}
      variant={props.variant ? props.variant : "solid"}
      {...hoverButton}
      {...props}
      colorScheme="purple"
    >
      {children}
    </Button>
  )
}

export default ButtonStyle
