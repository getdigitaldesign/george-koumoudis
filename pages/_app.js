import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const colors = {
    brand: {
        primary: "#0070f3",
        secondary: "#1a202c"
    }
}
const theme = extendTheme({ colors })

function MyApp({ Component, pageProps }) {
  return (
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
  )
}

export default MyApp
