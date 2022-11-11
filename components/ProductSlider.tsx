import { Image, Stack } from "@chakra-ui/react";
import React from "react";
import { parseSrc } from "../lib/parseImage";

function ProductSlider({ images }: any) {
  return (
    <Stack
      direction={{ base: "column", sm: "row" }}
      justifyContent={"center"}
      alignContent="center"
      overflowX="scroll"
      className="hide-scroll-bar"
      maxW={"6xl"}
      w="full"
    >
      {images.map((image: string | undefined) => {
        // @ts-ignore
        return <Image src={parseSrc(image?.src)} />;
      })}
    </Stack>
  );
}

export default ProductSlider;
