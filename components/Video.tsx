import { Box } from "@chakra-ui/react";
import React from "react";

const Video = ({ url }: any) => {
  return (
    <Box
      as="iframe"
      width="100%"
      maxH="xl"
      height={"lg"}
      src={`${url}`}
      // title={article?.videoTitle}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      py="4"
    ></Box>
  );
};

export default Video;
