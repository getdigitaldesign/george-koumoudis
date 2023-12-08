import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
  } from '@chakra-ui/react';
  import { FaStore, FaYelp, FaTwitter, FaFacebook, FaLinkedin, FaPinterest, FaYoutube, FaGlobe, FaMapPin } from 'react-icons/fa';
  import { ReactNode } from 'react';
  
  const SocialButton = ({
    children,
    label,
    href,
  }) => {
    return (
      <chakra.button
        target='_blank'
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function Footer() {
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Text>© 2023 George Koumoudis | SGK Contracting Inc. All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'https://twitter.com/georgekoumoudis/'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'Facebook'} href={'https://www.facebook.com/sgkcontracting/'}>
              <FaFacebook />
            </SocialButton>
            <SocialButton label={'LinkedIn'} href={'https://www.linkedin.com/in/george-koumoudis/'}>
              <FaLinkedin />
            </SocialButton>
            <SocialButton label={'Pinterest'} href={'https://www.pinterest.com/georgekoumoudis/'}>
              <FaPinterest />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'https://www.youtube.com/@GeorgeKoumoudis/'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Yelp'} href={'https://www.yelp.com/biz/sgk-contracting-baltimore'} open>
              <FaYelp />
            </SocialButton>
            <SocialButton label={'Website'} href={'https://www.sgkcontractinginc.com'} open>
              <FaGlobe />
            </SocialButton>
            <SocialButton label={'eLocal'} href={'https://www.elocal.com/profile/sgk-contracting-inc-21910783'} open>
              <FaStore />
            </SocialButton>
            <SocialButton label={'MapQuest'} herf={'https://www.mapquest.com/us/maryland/sgk-contracting-inc-353731918'} open>
              <FaMapPin />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    );
  }