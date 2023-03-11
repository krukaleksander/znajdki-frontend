import React from "react";
import { Heading, List, ListIcon, ListItem } from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";

const EtrAboutActivity = ({ textFontSize, circleColor }) => {
    return (
        <div>
            <Heading
                fontSize={textFontSize}
                p={"20px 0px 20px 0px"}
                fontWeight={"bolder"}
            >
                O działalności Fundacji Znajdki przeczytasz:
            </Heading>

            <List spacing={3} textAlign={"left"}>
                <ListItem>
                    <ListIcon as={MdCheckCircle} color={circleColor} />
                    na stronie www.znajdki.pl
                </ListItem>
                <ListItem>
                    <ListIcon as={MdCheckCircle} color={circleColor} />
                    znajdki fb
                </ListItem>
                <ListItem>
                    <ListIcon as={MdCheckCircle} color={circleColor} />
                    znajdki instagram
                </ListItem>
            </List>
        </div>
    );
};

export default EtrAboutActivity;
