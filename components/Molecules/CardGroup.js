import React from 'react';
import { SimpleGrid, Heading, Stack } from '@chakra-ui/react';
import { Card } from '../Atoms';

export const CardGroup = ({articles}) => {
    return (
        <>
        <Stack 
            id={'NewsGroup'} 
            align={'center'}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 5, md: 10 }}
        >
        <Heading as='h2' size='3xl' color='blue.900' >
            Stories
        </Heading> 
        </Stack>
        <SimpleGrid 
            columns={[ 1, null, 2 ]}
            spacing={5}
            py={{ base: 5, md: 10 }}
        >
            {articles?.map(({ url, imageUrl, title, date, abstract, isNew }, index) =>
                <Card 
                    key={index}
                    url={url}
                    imageUrl={imageUrl}
                    title={title}
                    date={date}
                    abstract={abstract}
                    isNew={isNew}
            />)}
        </SimpleGrid>
        </>
    )
}