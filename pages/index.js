import Head from 'next/head';
import Script from 'next/script';
import { Container } from '@chakra-ui/layout';
import CallToActionWithVideo from '../components/Sections/CalltoActionWithVideo';
import Footer from '../components/Sections/Footer';
import { NavBar, CardGroup } from '../components/Molecules';
import { articles } from '../constant/newsArticles';

export default function Home() {

  const addVideoJsonLd = () => ({
    __html: `{
      "@context": "https://schema.org/",
      "@type": "VideoObject",
      "name": "George Koumoudis | #networkingskills | Master the Art of Networking with Roofing Professionals",
      "thumbnailUrl": "https://i.pinimg.com/736x/61/9b/07/619b076d0384a12bbf3cde194870cb91.jpg",
      "uploadDate":"20231017T133356-0400",
      "description": "George Koumoudis President of SGK Contracting Inc explains how he got started forming relationships with different roofing crews to help bid on projects.",
      "hasPart": {
        "@type": "Clip",
        "name": "George Koumoudis talks safety",
        "startOffset": 30,
        "url": "https://www.youtube.com/watch?v=1xYPzMfeXHA"
      }
    }`
  })
    return (
    <>
        <Head>
          <title>George Koumoudis | SGK Contracting Inc. </title>
          <meta name="description" content="" />
          <link rel="icon" href="/favicon.ico" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={addVideoJsonLd()}
            key="product-jsonld"
        />
        </Head>
        <Container maxW='container.xl'>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-E6W0F01L4M" 
            strategy="afterInteractive" 
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-E6W0F01L4M');
            `}
          </Script>
            <NavBar />
            <CallToActionWithVideo />
            <CardGroup  articles={articles} />
        </Container>
      <Footer /> 
    </>
    )
}