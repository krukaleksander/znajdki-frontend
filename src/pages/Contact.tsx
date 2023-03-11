import React from "react";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import dog from "../assets/images/dog_with_headset.png";
import { useStore } from "@nanostores/react";
import { smallerHeadingFont, textFont } from "../stores/fonts.store";
import { blackColorText, greenColorText } from "../stores/contrast.store";

const Contact = () => {
  const fontSize = useStore(textFont);
  const headingSize = useStore(smallerHeadingFont);
  const blackTextColor = useStore(blackColorText);
  const greenTextColor = useStore(greenColorText);

  return (
    <Box fontSize={fontSize} color={blackTextColor}>
      <Heading color={greenTextColor} fontSize={headingSize}>
        Kontakt
      </Heading>
      <Flex flexDirection={{base: 'column', lg: 'row-reverse'}} justifyContent={'center'}>
        <Image
          src={dog}
          pt={"10px"}
          alt={"pies w okularach z zestawem słuchawkowym na uszach"}
          boxSize={{ lg: '500px'}}
          borderRadius={'20px'}
        />
        <Flex flexDirection={'column'} justifyContent={'center'}>
          <Box p={"10px"}>
            <Heading fontSize={headingSize}>
              Przytulisko Znajdki k.Radzymina
            </Heading>
            <Text>Krusze ul. Kryształowa 171</Text>
            <Text>05-240 Tłuszcz</Text>
          </Box>
          <Box p={"20px 10px 20px 10px"}>
            <Text>tel. 664 821 160</Text>
            <Text>mail : znajdki2012@gmail.com</Text>
          </Box>
          <Box p={"20px 10px 20px 10px"}>
            <Text>Fundacja Znajdki</Text>
            <Text>Bank PEKAO S.A. konto: 91 1240 1082 1111 0010 4867 8484</Text>
            <Text>dla przelewów zagranicznych:</Text>
            <Text>IBAN: PL91 1240 1082 1111 0010 4867 8484</Text>
            <Text>BIC: PKOPPLPW</Text>
            <Text>albo PAYPAL przytulisko.jb@o2.pl</Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Contact;
