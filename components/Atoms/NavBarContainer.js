import { Flex } from '@chakra-ui/react'

export const NavBarContainer = ({ children, ...props }) => {
    return (
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        p={4}
        bg={["primary.500", "primary.500", "transparent", "transparent"]}
        color={["blue.600", "blue.600", "primary.700", "primary.700"]}
        {...props}
      >
        {children}
      </Flex>
    )
  }