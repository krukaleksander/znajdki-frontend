import React from "react";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { greenColorBackground, whiteColorText } from "../stores/contrast.store";
import { useStore } from "@nanostores/react";
import { smallerHeadingFont, textFont } from "../stores/fonts.store";
import logo from "../assets/images/logo.jpg";

const Footer = () => {
  const bgColor = useStore(greenColorBackground);
  const color = useStore(whiteColorText);
  const headingSize = useStore(smallerHeadingFont);
  const textSize = useStore(textFont);
  return (
    <Box pt={"10px"}>
      <Flex
        bgColor={bgColor}
        justifyContent={"space-around"}
        alignItems={"center"}
        gap={"20px"}
        p={'20px'}
        flexDirection={{base: 'column-reverse', lg: 'row'}}
      >
        <Flex
          color={color}
          flexDirection={"column"}
          textAlign={{ base: 'center', lg:"left"}}
        >
          <Heading fontSize={headingSize}>Dane fundacji:</Heading>
          <Text fontSize={textSize}>Fundacja Znajdki</Text>
          <Text fontSize={textSize}>Krusze 132 05-240 Tłuszcz</Text>
          <Text fontSize={textSize}>
            PEKAO S.A. konto: 91 1240 1082 1111 0010 4867 8484
          </Text>
          <Text fontSize={textSize}>Dla przelewów zza zagranicy:</Text>
          <Text fontSize={textSize}>
            IBAN: PL91 1240 1082 1111 0010 4867 8484
          </Text>
          <Text fontSize={textSize}>BIC: PKOPPLPW</Text>
          <Text fontSize={textSize}>lub PAYPAL przytulisko.jb@o2.pl</Text>
        </Flex>
          <Flex>
              <Image src={logo} width={"150px"} />
          </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
