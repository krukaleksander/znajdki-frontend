import React from 'react';
import {Heading, List, ListIcon, ListItem} from "@chakra-ui/react";
import {MdCheckCircle} from "react-icons/md";

const EtrHowHelp = ({textFontSize, circleColor}) => {
    return (
        <div>

            <Heading
                fontSize={textFontSize}
                p={"20px 0px 20px 0px"}
                fontWeight={"bolder"}
            >
                Jak pomóc Fundacji:
            </Heading>

            <List spacing={3} textAlign={'left'}>
                <ListItem>
                    <ListIcon as={MdCheckCircle} color={circleColor} />
                    zostać wolontariuszem
                </ListItem>
                <ListItem>
                    <ListIcon as={MdCheckCircle} color={circleColor} />
                    zorganizować zbiórkę dla zwierząt
                </ListItem>
                <ListItem>
                    <ListIcon as={MdCheckCircle} color={circleColor} />
                    przekazać potrzebne rzeczy
                </ListItem>
                <ListItem>
                    <ListIcon as={MdCheckCircle} color={circleColor} />
                    adoptować wirtualnie potrzebujące zwierzę
                </ListItem>
                <ListItem>
                    <ListIcon as={MdCheckCircle} color={circleColor} />
                    pomagać w opiece nad zwierzętami w przytulisku
                </ListItem>
            </List>

        </div>
    );
};

export default EtrHowHelp;