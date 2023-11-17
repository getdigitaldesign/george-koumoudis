import React from "react"
import { Box, Image,Link, Text, Badge } from "@chakra-ui/react"

export const Card = ({ imageUrl, imageAlt, title, abstract, url, date, isNew }) => {
    const event = new Date(date);
    return (
    <Link href={url} isExternal>
    <Box  maxW='md' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Box maxH='3xs'  overflow='hidden'>
        <Image
            fit='cover' 
            src={imageUrl} 
            alt={imageAlt} />
      </Box>
      <Box p='6'>
        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          isTruncated
        >
          {title}
        </Box>

        <Box>
            <time dateTime={date}>{event.toDateString()}</time>
            {isNew && <Badge ml='1' fontSize='0.8em' bg='yellow.400' >New</Badge>}
        </Box>

        <Box display='flex' mt='2' alignItems='center'>
          <Box 
            as='span'
            color='gray.600' 
            fontSize='sm'
          >
          <Text noOfLines={[3, null, 4]}>
            {abstract}
          </Text>
          </Box>
        </Box>
      </Box>
    </Box>
    </Link>
  )
}
