import {
  Box,
  Heading,
  Stack,
  Image,
  Text,
  VStack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import React from "react";

function ModalPic({ url }: { url: string }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box onClick={onOpen} boxShadow={{ base: "2xl", sm: "none" }}>
        <Image
          h="sm"
          marginLeft="auto"
          marginRight="auto"
          src={url}
          boxShadow={{ base: "none", sm: "2xl" }}
        />
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent bg="white">
          <ModalCloseButton color="black" bg="white" />
          <Box onClick={onOpen} boxShadow="2xl" w="full" p="4">
            <Image w="lg" marginLeft="auto" marginRight="auto" src={url} />
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
}
const About: NextPage = () => {
  return (
    <>
      <VStack bg="white" color="black" w="100%">
        <Head>
          <title>OYA Textile - Oya Ev Tekstili ve tic.ltd.şti. </title>
          <meta
            name="description"
            content="A reputed Turkish manufacturer and exporter of home, hotel, and pet textile with a significant experience in the field of Textile."
          />
          <meta
            name="keywords"
            content="Turkish manufacturer, exporter, home, hotel, pet, bed, textile, Turkey, Denizli"
          />
        </Head>
        <Box w="full" h="md" display="flex" pos={"relative"}>
          <Image
            src={"/images/about.jpg"}
            objectFit="cover"
            w="100%"
            h="100%"
            position="relative"
            __css={{
              zIndex: "0",
            }}
          />
          <Heading
            marginTop="auto"
            bg="white"
            p="4"
            pos={"absolute"}
            bottom="0"
          >
            About company
          </Heading>
        </Box>
        <Stack
          w="full"
          direction={{ lg: "row", base: "column" }}
          p="12"
          justifyContent={{ base: "start", lg: "center" }}
          spacing="8"
        >
          <Stack
            w={{ base: "full", lg: "3xl" }}
            spacing={{ lg: 8, base: 4 }}
            py="8"
          >
            <Text fontSize="14">
              OYA Textile - Oya Ev Tekstili ve tic.ltd.şti - A reputed Turkish
              manufacturer and exporter of home, hotel, and pet textile with a
              significant accumulated experience in the field of Textile.
            </Text>
            <Text fontSize="14">
              Our customers are keynote to our success and flourishing as a
              trustworthy manufacturer, we are committed to deliver products
              that meet their needs and their market requirements in terms of
              quality, finishing and eventually reasonable, competitive prices.
            </Text>
            <Text fontSize="14">
              Products produced in our facility are the flagship of our company,
              we adapted a transparent easy-to-follow concept to help clients
              have the big picture of the manufacturing, exporting process that
              distinguished us among others - further details feel free to check
              –Private label ‘s page
            </Text>
          </Stack>
          <Image src="/images/about/3.jpg" />
        </Stack>
        <hr />
        <Stack
          w="full"
          // h="md"
          direction={{ lg: "row", base: "column" }}
          p="12"
          justifyContent={{ base: "start", lg: "center" }}
          spacing={12}
        >
          <Box display={"flex"} flexDirection="row">
            <Box>
              <Image h="150" w="64" src="/images/oeko.jpg" />
            </Box>
            <Box>
              <Image h="150px" src="/images/iso.jpg" />
            </Box>
            <Box>
              <Image h="150px" src="/images/got.webp" />
            </Box>
          </Box>
          <Text alignSelf="center" w={{ base: "full", lg: "xl" }}>
            To match up with our client’s expectation we make sure our company
            follows the international standards, we are certified with most
            known and retuable Textile Certification so that our clients
            collaborate with us while they are certain of the origine of the
            products.
          </Text>
        </Stack>
        <hr />
        <Stack
          w="full"
          direction={{ lg: "row", base: "column" }}
          p="12"
          justifyContent="center"
          spacing={4}
        >
          <ModalPic url="/images/certification/1.jpeg" />
          <ModalPic url="/images/certification/2.jpeg" />
          <ModalPic url="/images/certification/3.jpeg" />
          <ModalPic url="/images/certification/4.jpeg" />
        </Stack>
        <hr />
        <Stack
          w="full"
          // h="md"
          direction="column"
          p="12"
          justifyContent="center"
          spacing={4}
          textAlign="center"
        >
          <Heading>Our Brands</Heading>
          <Stack
            direction={{ lg: "row", base: "column" }}
            spacing="8"
            alignSelf="center"
          >
            <Image src="/images/certification/brand1.svg" />
            <Image src="/images/certification/brand2.svg" />
          </Stack>
        </Stack>
      </VStack>
    </>
  );
};

export default About;
