import { Heading, Image, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

const Logo = ({ index }: any) => {
  return (
    <Link>
      <NextLink href="/">
        <Image w="64" src={`/images/logo/${index}.png`} />
      </NextLink>
    </Link>
  );
};

export default Logo;
