import React from 'react';
import {Heading, List, ListIcon, ListItem} from "@chakra-ui/react";
import {MdCheckCircle} from "react-icons/md";

const EtrOurRules = ({textFontSize, circleColor}) => {
    return (
        <div>

            <Heading
                fontSize={textFontSize}
                p={"20px 0px 20px 0px"}
                fontWeight={"bolder"}
            >
                Nasze Zasady:
            </Heading>

            <List spacing={3} textAlign={'left'}>
                <ListItem>
                    <ListIcon as={MdCheckCircle} color={circleColor} />
                    zwierzęta do czasu adopcji przebywają w przytulisku i domach tymczasowych
                </ListItem>
                <ListItem>
                    <ListIcon as={MdCheckCircle} color={circleColor} />
                    zanim zaadoptujesz zwierzę musisz je poznać
                </ListItem>
                <ListItem>
                    <ListIcon as={MdCheckCircle} color={circleColor} />
                    my musimy poznać Ciebie i Twój dom
                </ListItem>
                <ListItem>
                    <ListIcon as={MdCheckCircle} color={circleColor} />
                    adoptując psa lub kota podpisujesz umowę adopcyjną
                </ListItem>
                <ListItem>
                    <ListIcon as={MdCheckCircle} color={circleColor} />
                    zobowiązujesz się do opieki nad zwierzęciem do końca jego życia
                </ListItem>
            </List>

        </div>
    );
};

export default EtrOurRules;