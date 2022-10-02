import { ReactNode, useEffect, useState } from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
  Collapse,
  Hide,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import { leftPaths, rightPaths } from "../data/navdata";
import Logo from "./logo";
const NavLink = ({ children, href }: { children: ReactNode; href: string }) => (
  <Link
    px={{ xl: 2, base: "1" }}
    py={1}
    _hover={{
      textDecoration: "underline",
      color: "green.300",
    }}
    fontSize={{ xl: "14", base: "sm" }}
  >
    <NextLink href={href}>{children}</NextLink>
  </Link>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box bg="white" color="blackAlpha.700" px={4} m="0">
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent="space-between"
        position="relative"
        flexWrap="wrap"
      >
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ lg: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={"center"}>
          <HStack as={"nav"} spacing={4} display={{ base: "none", lg: "flex" }}>
            {leftPaths.map((link) => (
              <NavLink key={link.label} href={link.path}>
                {link.label}
              </NavLink>
              // </button>
            ))}
          </HStack>
        </HStack>
        <Box color="black" textAlign="center" margin={"auto"}>
          <NextLink href="/">
            <Logo />
          </NextLink>
        </Box>
        <Flex
          alignItems={"center"}
          display={{ base: "none", lg: "flex" }}
          gap={3}
        >
          {rightPaths.map((link) => (
            <NavLink key={link.label} href={link.path}>
              {link.label}
            </NavLink>
          ))}
          <LanguageSwitcher />
        </Flex>
        <Hide above="lg">
          <LanguageSwitcher />
        </Hide>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <Box pb={4} display={{ lg: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {leftPaths.map((link) => (
              <Link
                onClick={() => {
                  onClose();
                }}
              >
                <NavLink key={link.path} href={link.path}>
                  {link.label}
                </NavLink>
              </Link>
            ))}
            {rightPaths.map((link) => (
              <Link
                onClick={() => {
                  onClose();
                }}
              >
                <NavLink key={link.label} href={link.path}>
                  {link.label}
                </NavLink>
              </Link>
            ))}
          </Stack>
        </Box>
      </Collapse>
    </Box>
  );
}
