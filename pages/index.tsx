import { Box, Center, Heading, Image, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Box
      h={{ base: "100vh", sm: "fit-content" }}
      maxW="100%"
      __css={{}}
      position="relative"
    >
      <Image
        src="/images/background.jpeg"
        objectFit="cover"
        w="100%"
        h="100%"
        position="relative"
        __css={{
          zIndex: "0",
        }}
      />

      <Center>
        <Box position="absolute" top="20%" zIndex="1" w="fit-content">
          <Heading
            lineHeight="tall"
            as="h1"
            color="black"
            letterSpacing={4}
            textAlign="center"
            bg={"whiteAlpha.800"}
            fontSize={{ md: "4xl", base: "2xl", sm: "xl" }}
          >
            Custom-Made Textile Manufacturer
          </Heading>
          {/* </Box>
        <Box position="absolute" top="30%" zIndex="1" w="fit-content" py='1'> */}
          <Heading
            py="4"
            as="h3"
            px="4"
            margin='auto'
            w="fit-content"
            color="black"
            bg="whiteAlpha.800"
            textAlign="center"
            fontSize={{ md: "xl", base: "md", sm: "sm" }}
            letterSpacing={2}
          >
            Home, Hotel, Pet Textile
          </Heading>
        </Box>
      </Center>

      <Center></Center>
    </Box>
  );
};

export default Home;
