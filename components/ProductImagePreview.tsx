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
} from "@chakra-ui/react";
import { parseImages, parseSrc } from "../lib/parseImage";
// ts-ignore
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import React from "react";
import Preview from '../components/Preview'

const ProductImagePreview = ({ content }: { content: string | null }) => {
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
      </Tabs>
    </Box>
  );
};

export default ProductImagePreview;
