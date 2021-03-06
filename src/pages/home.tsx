
import {
  Box,
  SimpleGrid,
  GridItem,
  VStack,
  Image,
  Flex
} from '@chakra-ui/react'
import React from 'react'

// import apoio from '../assets/apoio.png'
// import incentivo from '../assets/incentivo.png'
// import realizacao from '../assets/realização.png'
import { ArtCard } from '../components/ArtCard'
import { artistsCards } from '../data'

const Home = () => (
  <Box textAlign="center" fontSize="xl" minH="100vh">
    <SimpleGrid columns={[1, 2, 3, 4]} mx="60px" spacingY={{ base: 1, md: 5 }} spacingX={5}>
      {artistsCards.map(artist => (
        <GridItem key={artist.artistName}>
          <ArtCard
            // modalImages={artist.modalImages}
            bgImg={artist.bgImg}
            artistName={artist.artistName}
            id={artist.id}
          />
        </GridItem>
      ))}
    </SimpleGrid>

    <VStack h={{ base: 'auto', lg: '80px' }} ml="auto" alignItems="flex-end" px="60px" mt={{ base: 12, lg: 24 }} mb="-10">
      <Flex
        flexDirection={{ base: 'column', lg: 'row' }}
        w="full"
        alignItems="flex-end"
        justifyContent="space-between"
        h={{ base: 'auto', lg: '80px' }}
        mb={{ base: 5, lg: 0 }}
        mr="-4"
      >
        {/* <Box bgImage={incentivo} bgPosition="top" mx={3} bgSize="contain" bgRepeat="no-repeat" flex={{ base: 1, lg: 2.4 }} h="full" w="full" /> */}
        {/* <Box bgImage={realizacao} bgPosition="top" mx={3} bgSize="contain" bgRepeat="no-repeat" flex={1} h="full" w="full" /> */}
        {/* <Box bgImage={apoio} bgPosition="top" mx={3} bgSize="contain" bgRepeat="no-repeat" flex={{ base: 1, lg: 2.3 }} h="full" w="full" mt={{ base: 5, lg: 0 }} /> */}
        <Image src="/assets/incentivo.png" h="auto" w="auto" mx="auto" py={10} />
        <Image src="/assets/realização.png" h="auto" w="auto" mx="auto" py={10} maxW={{ base: 220, sm: 'full' }} />
        <Image src="/assets/apoio.png" h="auto" w="auto" mx="auto" py={10} />
      </Flex>
    </VStack>
  </Box>
)

export default Home
