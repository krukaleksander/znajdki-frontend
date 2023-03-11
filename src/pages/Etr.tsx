import React from "react";
import { Box, Heading, List, ListIcon, ListItem } from "@chakra-ui/react";
import { useStore } from "@nanostores/react";
import { smallerHeadingFont, textFont } from "../stores/fonts.store";
import { blackColorText, greenColorText } from "../stores/contrast.store";
import { MdCheckCircle } from "react-icons/md";

const Etr = () => {
  const headerFontSize = useStore(smallerHeadingFont);
  const textFontSize = useStore(textFont);
  const textColor = useStore(blackColorText);
  const circleColor = useStore(greenColorText);
  return (
    <Box color={textColor} p={"15px"} fontSize={textFontSize}>
      <Heading fontSize={headerFontSize}>ETR</Heading>
      <Heading fontWeight={"bolder"} fontSize={textFontSize}>
        Fundacja Znajdki istnieje od 2012 roku.
      </Heading>
      <Heading
        fontSize={textFontSize}
        p={"20px 0px 20px 0px"}
        fontWeight={"bolder"}
      >
        Czym zajmuje się Fundacja:
      </Heading>

      <List spacing={3} textAlign={'left'}>
        <ListItem>
          <ListIcon as={MdCheckCircle} color={circleColor} />
          pomaga bezdomnym psom i kotom
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color={circleColor} />
          pomaga kotom wolno żyjącym
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color={circleColor} />
          leczy chore zwierzęta
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color={circleColor} />
          kastruje, aby ograniczyć rozmnażanie
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color={circleColor} />
          szuka nowych domów dla bezdomnych zwierząt
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color={circleColor} />
          edukuje
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color={circleColor} />
          promuje dobrą adopcję
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color={circleColor} />
          uczy dbania o środowisko
        </ListItem>
      </List>
    </Box>
  );
};

export default Etr;
