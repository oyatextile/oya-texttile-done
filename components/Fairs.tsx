import { Tabs, TabList, Tab, TabPanels, TabPanel, Image, Box, SimpleGrid } from '@chakra-ui/react'
import React from 'react'

function Fairs() {
    return (
        <div >
            <Tabs variant="unstyled">
                <TabList justifyContent="center" flexWrap={"wrap"}>
                    <Tab
                        _selected={{ color: "#299D8C" }}
                        fontSize={{ base: "14" }}
                    >PETZOO</Tab>
                    <Tab
                        _selected={{ color: "#299D8C" }}
                        fontSize={{ base: "14" }}
                    >INTERZOO</Tab>
                    <Tab
                        _selected={{ color: "#299D8C" }}
                        fontSize={{ base: "14" }}
                    >ZOOMARK</Tab>
                </TabList>

                <TabPanels w="4xl" overflow="hidden">
                    <TabPanel>
                        <Interzoo />
                    </TabPanel>
                    <TabPanel>
                        <Petzoo />
                    </TabPanel>
                    <TabPanel>
                        <Zoomark />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    )
}

function Interzoo() {
    return (
        <Box display={'flex'} gap='2' flexDirection={{ md: 'row', base: 'column' }}>
            <Box flexDirection={'row'} h='full' gap={'2'}>
                <Image src="/images/Fair-pictures/INTERZOO/INTERZOO-6.jpeg" pb='2' />
                <Image src="/images/Fair-pictures/INTERZOO/INTERZOO-7.jpeg" />
            </Box>
            <SimpleGrid mx='auto' columns={{ md: 2, base: 1 }} gap='2' >
                <Image src="/images/Fair-pictures/INTERZOO/INTERZOO-1.jpeg" />
                <Image src="/images/Fair-pictures/INTERZOO/INTERZOO-2.jpeg" />

                <Image src="/images/Fair-pictures/INTERZOO/INTERZOO-3.jpeg" />
                <Image src="/images/Fair-pictures/INTERZOO/INTERZOO-4.jpeg" />
                <Image src="/images/Fair-pictures/INTERZOO/INTERZOO-5.jpeg" />
            </SimpleGrid>
        </Box>
    )
}
function Petzoo() {
    return (
        <Box display={'flex'} gap='2' flexDirection={{ md: 'row', base: 'column' }}>
            <Box flexDirection={'row'} h='full' gap={'2'}>
                <video width="400" controls autoPlay src='/images/Fair-pictures/PETZOO/video.MOV'>
                </video>
                <Image src="/images/Fair-pictures/PETZOO/7.jpeg" pt='2' />
            </Box>
            <SimpleGrid mx='auto' columns={{ md: 2, base: 1 }} gap='2' >
                <Image src="/images/Fair-pictures/PETZOO/1.jpg" />
                <Image src="/images/Fair-pictures/PETZOO/2.jpeg" />
                <Image src="/images/Fair-pictures/PETZOO/6.jpeg" />
                <Image src="/images/Fair-pictures/PETZOO/4.jpeg" />
                <Image src="/images/Fair-pictures/PETZOO/5.jpeg" />
                <Image src="/images/Fair-pictures/PETZOO/3.jpeg" />
            </SimpleGrid>
        </Box>
    )
}
function Zoomark() {
    return (
        <Box display={'flex'} gap='2' flexDirection={{ md: 'row', base: 'column' }}>
            <Image src="/images/Fair-pictures/ZOOMARK/Zoomark.jpg" pb='2' />
        </Box>
    )
}
export default Fairs