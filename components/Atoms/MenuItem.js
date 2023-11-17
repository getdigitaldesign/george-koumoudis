import Link from 'next/link'
import { Text } from '@chakra-ui/react'

export const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
    return (
      <Link href={to}>
        <a><Text display="block" {...rest}>
          {children}
        </Text>
        </a>
      </Link>
    )
  }