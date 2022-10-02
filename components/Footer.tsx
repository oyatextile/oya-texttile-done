import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Divider,
  Image,
} from "@chakra-ui/react";
import {
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
import NextLink from "next/link";
import Logo from "./logo";
import TransDiv from "../components/TransDev";
import SocialButton from "./SocialButton";
import { useTranslation } from "next-i18next";
const rightPaths = [
  {
    path: "/contact",
    label: "Contact",
  },
  {
    path: "/about",
    label: "About",
  },
  {
    path: "/career",
    label: "Career",
  },
];

export default function Footer() {
  return (
    <Box bg="white" color="black" >
      <Divider />
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          columns={{sm:1,lg:3}}
          justifyContent="center"
          spacing={4}
        >
          <Stack spacing={4}>
            <Box>
              <Logo />
            </Box>
            <Stack direction={"row"} spacing={6} _hover={{}}>
              <TransDiv>
                <SocialButton
                  label={"Twitter"}
                  href={"https://twitter.com/Oyaevtekstili"}
                >
                  <FaTwitter fill="#299D8C" style={{}} />
                </SocialButton>
              </TransDiv>
              <TransDiv>
                <SocialButton
                  label={"YouTube"}
                  href={
                    "https://www.youtube.com/channel/UCaFjHW4MOhyVwvLbYoMoGIQhttp:/youtube.com"
                  }
                >
                  <FaYoutube fill="#299D8C" />
                </SocialButton>
              </TransDiv>
              <TransDiv>
                <SocialButton
                  label={"Instagram"}
                  href={"https://www.instagram.com/oyaevtekstili/"}
                >
                  <FaInstagram fill="#299D8C" />
                </SocialButton>
              </TransDiv>
              <TransDiv>
                <SocialButton
                  label={"Facebook"}
                  href={
                    "https://web.facebook.com/oyahomehoteltextile/?_rdc=1&_rdr"
                  }
                >
                  <FaFacebook fill="#299D8C" />
                </SocialButton>
              </TransDiv>
              <TransDiv>
                <SocialButton
                  label={"Linkedin"}
                  href={"https://www.linkedin.com/company/28625375/admin/"}
                >
                  <FaLinkedin fill="#299D8C" />
                </SocialButton>
              </TransDiv>
            </Stack>
            <Text fontSize={"sm"}>© 2022 OYA HOME. All rights reserved</Text>
          </Stack>

          <Stack align={{lg :'center',base:'flex-start'}} >
            {rightPaths.map((path, i) => {
              return (
                <Link key={path.label}>
                  <NextLink href={path.path}>{path.label}</NextLink>
                </Link>
              );
            })}
          </Stack>
          <Stack align={"flex-start"} px="6" direction="row" pt="8">
            <Box boxSize="74px" rounded="full">
              <Image src="/images/iso.jpg" alt="ISO" />
            </Box>
            <Box boxSize="74px" rounded="full">
              <Image src="/images/got.webp" alt="GOT GLOBAL ORGANIC " />
            </Box>
            <Box boxSize="74px" rounded="full">
              <Image src="/images/oeko.svg" alt="OEKO TEXTILLE" />
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
