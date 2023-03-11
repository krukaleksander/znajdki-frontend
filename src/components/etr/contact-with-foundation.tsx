import React from "react";
import { Heading, List, ListIcon, ListItem } from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";

const EtrContactWithFoundation = ({ textFontSize, circleColor }) => {
  return (
    <div>
      <Heading
        fontSize={textFontSize}
        p={"20px 0px 20px 0px"}
        fontWeight={"bolder"}
      >
        Kontakt z Fundacją Znajdki:
      </Heading>

      <List spacing={3} textAlign={"left"}>
        <ListItem>
          <ListIcon as={MdCheckCircle} color={circleColor} />
          telefon- 664 821 160
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color={circleColor} />
          mail - znajdki2012@gmail.com
        </ListItem>
      </List>
    </div>
  );
};

export default EtrContactWithFoundation;
