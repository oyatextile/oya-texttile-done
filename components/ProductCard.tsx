import { AddIcon, CloseIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Heading,
  Image,
  Link,
  List,
  ListIcon,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BsFillCheckCircleFill } from "react-icons/bs";
import NextLink from "next/link";
import { parseImages, parseSrc } from "../lib/parseImage";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const ProductCard = ({
  product,
  content,
}: {
  product: any;
  content: string | null;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [description, setlistDescription] = useState<{
    listDescription: string[];
    descriptionText: string;
  }>({
    listDescription: [],
    descriptionText: "",
  });
  const [customizationOptions, setcustomizationOptions] = useState<string[]>(
    []
  );
  const [options, setlistOptions] = useState<{
    listOptions: string[];
    optionTitle: string;
  }>({
    listOptions: [],
    optionTitle: "",
  });
  useEffect(() => {
    const data = product?.description;
    setlistDescription({
      listDescription: data
        ?.split("\n")
        .filter((it: string) => it.includes("✅")),
      descriptionText: data
        ?.split("\n")
        .filter((it: string) => !it.includes("✅")),
    });
    const data1 = product?.orderProduction;
    setlistOptions({
      listOptions: data1?.split("\n").filter((it: string) => it.includes("*")),
      optionTitle: data1?.split("\n").filter((it: string) => !it.includes("*")),
    });
    const data2 = product?.customizationOptions;

    setcustomizationOptions(
      data2?.split("\n").filter((it: string) => it.includes("*"))
    );
  }, []);
  const images = parseImages(content);
  return (
    <Box
      border="1px solid"
      p="4"
      borderColor="blackAlpha.100"
      justifyContent="center"
    >
      <Box
        as={motion.div}
        onClick={onOpen}
        whileHover={{
          scale: 1.03,
          transition: { duration: 0.3 },
        }}
        margin="auto"
        w="full"
        whileTap={{ scale: 0.9 }}
      >
        <Box position="relative" display="flex" justifyContent="center">
          <Image src={product?.mainImage.mediaItemUrl} fit="contain" w="full" />
          <Tooltip
            hasArrow
            label="More info"
            bg="whiteAlpha.300"
            color="blackAlpha.700"
          >
            <Box
              position="absolute"
              top="2"
              right="2"
              color="#299D8C"
              bg="white"
              border={"1px"}
              px="2"
              py="1"
              _hover={{
                color: "black",
              }}
              __css={{
                // border: "1px solid ",
                bg: "transparent",
                borderColor: "lightgray",
                borderRadius: "100%",
                // p: "1",
              }}
            >
              <AddIcon boxSize={"4"} />
            </Box>
          </Tooltip>
        </Box>
        <Heading
          textAlign="center"
          color="blackAlpha.600"
          fontSize="md"
          pt="4"
          letterSpacing={3}
        >
          {product?.name}
        </Heading>
      </Box>

      <Modal
        blockScrollOnMount={false}
        onClose={onClose}
        size={{ lg: "4xl", md: "md", base: "sm" }}
        isOpen={isOpen}
        // onClose={onClose}
      >
        <ModalOverlay
          bg="blackAlpha.200"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent
          bg="white"
          color="black"
          w="full"
          flexDirection={{ base: "column", lg: "row" }}
          // borderRadius="none"
        >
          <ModalCloseButton zIndex={10} />
          <ModalBody p="0">
            <Box
              w={{ md: "md", base: "sm", sm: "sm" }}
              h="full"
              borderRight=".5px solid"
              __css={{
                borderColor: "blackAlpha.400",
              }}
            >
              <Tabs
                defaultIndex={0}
                variant="unstyled"
                display="flex"
                flexDir="column"
                justifyContent="flex-start"
                h="full"
              >
                <TabPanels>
                  {images &&
                    images.map((img: any, i: any) => {
                      return (
                        <TabPanel p="0" key={i}>
                          <TransformWrapper
                            initialScale={1}
                            initialPositionX={0}
                            initialPositionY={0}
                          >
                            {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                              <React.Fragment>
                                <TransformComponent>
                                  <Image
                                    w={{ md: "md", base: "sm" }}
                                    h="full"
                                    fit="cover"
                                    src={parseSrc(img.src)}
                                    alt="product image"
                                    // cursor='e-resize'
                                    _hover={{
                                      cursor: "zoom-out",
                                    }}
                                    // src={getStrapiMedia(img)}
                                  />
                                </TransformComponent>
                                <Box
                                  bg="white"
                                  display="flex"
                                  justifyContent="center"
                                  gap="1"
                                >
                                  <Button
                                    onClick={() => zoomIn()}
                                    h="30px"
                                    w="30px"
                                    p="1"
                                    color="black"
                                    // color="#299D8C"
                                    variant="ghost"
                                  >
                                    <AddIcon />
                                  </Button>
                                  <Button
                                    onClick={() => zoomOut()}
                                    h="30px"
                                    w="30px"
                                    p="1"
                                    color="black"
                                    // color="#299D8C"
                                    variant="ghost"
                                  >
                                    <MinusIcon />
                                  </Button>
                                  {/* <Button
                                    onClick={() => resetTransform()}
                                    h="30px"
                                    w="30px"
                                    p="1"
                                    color="#299D8C"
                                    variant="ghost"
                                  >

                                  </Button> */}
                                </Box>
                              </React.Fragment>
                            )}
                          </TransformWrapper>
                        </TabPanel>
                      );
                    })}
                </TabPanels>
                <TabList
                  justifyContent="center"
                  gap="2"
                  py="3"
                  marginTop="auto"
                  marginBottom="auto"
                >
                  {images?.map((img: any, i: any) => {
                    return (
                      <Tab p="0" key={i}>
                        <Image
                          // src={getStrapiMedia(img)}
                          src={parseSrc(img.src)}
                          w="50px"
                          h="50px"
                          __css={{
                            p: "1",
                            border: "1px solid",
                            borderColor: "black",
                            borderRadius: "4",
                          }}
                        />
                      </Tab>
                    );
                  })}
                </TabList>
              </Tabs>
            </Box>
          </ModalBody>
          <ModalFooter
            flexDirection="column"
            justifyContent="flext-start"
            bg="white"
            gap="4"
          >
            {/* produt name */}
            <Heading
              textAlign="start"
              as="h1"
              fontSize="xl"
              pt="5"
              color="blackAlpha.800"
              alignSelf="self-start"
              letterSpacing={3}
            >
              {product?.name}
            </Heading>
            <Text color="blackAlpha.600" fontSize="md" pt="4">
              {/* {title} */}
              {description.descriptionText}

              <List spacing={2} pt="4" fontSize="14">
                {description.listDescription?.map((it: string) => {
                  if (it)
                    return (
                      <ListItem>
                        <ListIcon as={BsFillCheckCircleFill} color="#289e8d" />
                        {it.replace("✅", "")}
                      </ListItem>
                    );
                })}
              </List>
            </Text>
            <Heading
              textAlign="start"
              as="h1"
              fontSize="lg"
              pt="2"
              color="blackAlpha.800"
              alignSelf="self-start"
              letterSpacing={3}
            >
              Order {"&"} Production
            </Heading>
            <Text color="blackAlpha.600" fontSize="14" w="full">
              <List spacing={2} pt="4">
                {options.listOptions?.map((item: string) => {
                  if (item)
                    return (
                      <ListItem display="flex">
                        <Text color="#289e8d" px="1">
                          ▶{" "}
                        </Text>
                        {item.replace("*", "")}
                      </ListItem>
                    );
                })}
              </List>
              <Text fontSize="14">{options.optionTitle}</Text>
            </Text>
            <Heading
              textAlign="start"
              as="h1"
              fontSize="lg"
              color="blackAlpha.800"
              alignSelf="self-start"
              letterSpacing={3}
              pt="4"
            >
              Customization options
            </Heading>
            <Text color="blackAlpha.600" w="full" fontSize="14">
              <List>
                {customizationOptions?.map((it: string) => {
                  if (it)
                    return (
                      <ListItem display="flex">
                        <Text color="#289e8d" px="1">
                          ■{" "}
                        </Text>
                        {it.replace("*", "")}
                      </ListItem>
                    );
                })}
              </List>
            </Text>
            <Box
              alignSelf="self-start"
              justifySelf="flex-end"
              marginTop="auto"
              py="6"
            >
              {/* tmp */}
              {/* <Link color="blackAlpha.800">
                <NextLink href={product?.postSlug}>
                  <Box fontSize="sm" display="flex" alignItems="center" gap="2">
                    <BsFillCheckCircleFill />
                    Read more
                  </Box>
                </NextLink>
              </Link> */}

            </Box>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ProductCard;
