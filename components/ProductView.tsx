import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
  Stack,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Link,
  Text,
  Tab,
  Flex,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React, { useEffect, useState } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { parseImages, parseSrc } from "../lib/parseImage";

function ProductView({
  product,
  content,
}: {
  product: any;
  content: string | null;
}) {
  const images = parseImages(content);
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
  return (
    <Stack
      bg="white"
      color="black"
      w="full"
      spacing={"8"}
      gap="4"
      justifyContent="space-evenly"
      alignContent={"center"}
      alignItems="center"
      flexDirection={{ base: "column", lg: "row" }}
    >
      <Box
        w={{ base: "full", lg: "50%" }}
        alignContent={"center"}
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
        >
          <TabPanels>
            {images &&
              images.map((img: any, i: any) => {
                return (
                  <TabPanel p="0" key={i} w="fit-content" margin={"auto"}>
                    <TransformWrapper
                      initialScale={1}
                      initialPositionX={0}
                      initialPositionY={0}
                    >
                      {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                        <React.Fragment>
                          <TransformComponent>
                            <Image
                              //   w="full"
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
      <Box
        flexDirection="column"
        justifyContent="flext-start"
        bg="white"
        color={"black"}
        gap="8"
        w={{ base: "full", lg: "50%" }}
      >
        <Heading
          textAlign="start"
          px="8"
          as="h1"
          py="4"
          fontSize={{ base: "xl", lg: "4xl" }}
          pt="5"
          color="blackAlpha.800"
          alignSelf="self-start"
          letterSpacing={3}
        >
          {product?.name}
        </Heading>
        <hr />
        <Tabs
          variant="line"
          px="4"
          pt="4"
          colorScheme={"#299D8C"}
          cursor="pointer"
        >
          <TabList
            p="0"
            flexDirection={{ md: "row", base: "column" }}
            justifyContent="start"
            gap={{ md: ".5", base: "4" }}
            py="3"
            w="fit-content"
            marginTop="auto"
            marginBottom="auto"
          >
            <Tab
              textAlign="start"
              as="h1"
              fontSize="12"
              color="blackAlpha.800"
              alignSelf="self-start"
              letterSpacing={2}
            >
              DESCRIPTION
            </Tab>
            <Tab
              textAlign="start"
              as="h1"
              fontSize="12"
              color="blackAlpha.900"
              alignSelf="self-start"
              letterSpacing={2}
              // _selected={{
              // color: "#299D8C",
              // textDecoration: "underline",
              // textUnderlineOffset: "10px",
              // }}
            >
              ORDER {"&"} PRODUCTION
            </Tab>
            <Tab
              textAlign="start"
              as="h1"
              fontSize="12"
              color="blackAlpha.800"
              alignSelf="self-start"
              letterSpacing={2}
              // _selected={{
              // color: "#299D8C",
              // textDecoration: "underline",
              // textUnderlineOffset: "10px",
              // }}
            >
              CUSTOMIZATION OPTIONS
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Text
                color="blackAlpha.600"
                px="4"
                py="4"
                flexWrap={"wrap"}
                fontSize="14"
              >
                {description?.descriptionText}

                <List spacing={2} pt="4" fontSize="14">
                  {description?.listDescription?.map((it: string) => {
                    if (it)
                      return (
                        <ListItem>
                          <ListIcon
                            as={BsFillCheckCircleFill}
                            color="#289e8d"
                          />
                          {it.replace("✅", "")}
                        </ListItem>
                      );
                  })}
                </List>
              </Text>
            </TabPanel>
            <TabPanel>
              <Text color="blackAlpha.600" fontSize="14">
                <List spacing={2} pt="4">
                  {options?.listOptions?.map((item: string) => {
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
                <Text fontSize="14" py="4">
                  {options.optionTitle}
                </Text>
              </Text>{" "}
            </TabPanel>
            <TabPanel>
              <Text color="blackAlpha.600" fontSize="sm" py="4">
                <List>
                  {customizationOptions?.map((it: string) => {
                    if (it)
                      return (
                        <ListItem display="flex">
                          <Text color="#289e8d" px="1" fontSize={"md"}>
                            ■{" "}
                          </Text>
                          {it.replace("*", "")}
                        </ListItem>
                      );
                  })}
                </List>
              </Text>{" "}
            </TabPanel>
          </TabPanels>
        </Tabs>

        <Box
          alignSelf="self-start"
          justifySelf="flex-end"
          marginTop="auto"
          //   py="6"
          px="6"
        >
          <Box
            as="iframe"
            p="0"
            width="100%"
            height={"64"}
            src={product?.videoSrc}
            title={product?.videoTitle}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></Box>

          <Link
            display={"flex"}
            color="blackAlpha.800"
            p="4"
            target={"_blank"}
            href={product?.catalog?.mediaItemUrl}
          >
            <Text color="#289e8d" px="1" fontSize={"md"}>
              ▶
            </Text>
            Download {product?.name} Catalog
          </Link>
          <Text px="4" fontSize={"sm"}>
            « Need more information on waffle product? Get in touch with our
            Sales Enginner.
          </Text>
          <Flex
            px="8"
            py="0"
            fontSize={"12"}
            gap="2"
            direction={{ base: "column", sm: "row" }}
          >
            <Flex alignItems={"center"} gap="1">
              <span
                style={{
                  marginBottom: "4px",
                  fontSize: "2em",
                }}
              >
                ✆{" "}
              </span>
              <Text>+90 546 207 65 60</Text>
            </Flex>
            <Flex alignItems={"center"} gap="1">
              <span
                style={{
                  marginBottom: "4px",
                  fontSize: "2em",
                }}
              >
                ✉{" "}
              </span>
              <Text>info@oyatextile.com </Text>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Stack>
  );
}

export default ProductView;
