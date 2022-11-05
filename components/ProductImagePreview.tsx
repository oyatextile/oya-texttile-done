import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Image,
  Text,
  Link,
} from "@chakra-ui/react";
import { parseImages, parseSrc } from "../lib/parseImage";
import NextLink from 'next/link'
// ts-ignore
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import React from "react";
import Preview from '../components/Preview'

const ProductImagePreview = ({ content,product }: { content: string | null;product:any }) => {
  const images = parseImages(content);

  return (
    <Box w="full" maxW="lg" m="0" zIndex={"10"}>
      <Tabs
        defaultIndex={0}
        mt="28"
        variant="unstyled"
        display="flex"
        flexDir="column"
        justifyContent="center"
      >
        <TabPanels>
          {images &&
            images.map((img: any, i: any) => {
              return (
                <TabPanel
                  p="0"
                  key={i}
                  w="full"
                  h="fit-content"
                  cursor="zoom-in"
                  display={"flex"}
                  flexDirection='column'
                  justifyContent="center"
                  position={"relative"}

                >
                  {/* src={parseSrc(img.src)} */}
                  <Preview src={parseSrc(img.src)} zoomLevel={2} magnifieWidth={200}/>
                   {/* <TransformWrapper
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
                  </TransformWrapper> */}
                </TabPanel>
              );
            })}
        </TabPanels>
        <TabList
          justifyContent="center"
          mx="auto"
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
                  alt="product images"
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
        <Text py="2" fontSize={"sm"}>
            « Need more information on {product?.name}?
            <NextLink href={"/contact"}>
              <Link px="2" textDecor={"underline"}>
                Get in touch with our Sales Enginner.
              </Link>
            </NextLink>
          </Text>
          <Button
            bg={"#3ea394"}
            color="white"
            maxW='64'
            px="4"
            border={"1"}
            _hover={{
              color: "#3ea394",
              bg: "white",
              border: "1px solid",
            }}
          >
            <Link
              display={"flex"}
              alignItems="center"
              target={"_blank"}
              _hover={{
                textDecor: "none",
                bg: "transparent",
              }}
              href={product?.catalog?.mediaItemUrl}
            >
              <Text px="1" fontSize={"md"}>
                ▶
              </Text>
              Download {product?.name} Catalog
            </Link>
          </Button>
      </Tabs>

    </Box>
  );
};

export default ProductImagePreview;
