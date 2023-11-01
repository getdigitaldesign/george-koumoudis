import Head from 'next/head'
import Script from 'next/script'
import { Container } from '@chakra-ui/layout'
import CallToActionWithVideo from '../components/Sections/CalltoActionWithVideo'
import Footer from '../components/Sections/Footer'

export default function Home() {
    return (
    <>
        <Head>
          <title>George Koumoudis | SGK Contracting Inc. </title>
          <meta name="description" content="" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Container maxW='container.xl'>
          {/* <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-3H0FNRP58L" 
            strategy="afterInteractive" 
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-3H0FNRP58L');
            `}
          </Script> */}
            <CallToActionWithVideo />
        </Container>
      <Footer /> 
    </>
    )
}