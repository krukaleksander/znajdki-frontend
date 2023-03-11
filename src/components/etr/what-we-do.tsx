import React from 'react';
import {Heading, List, ListIcon, ListItem} from "@chakra-ui/react";
import {MdCheckCircle} from "react-icons/md";

const EtrWhatWeDo = ({textFontSize, circleColor}) => {
    return (
        <div>
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
        </div>
    );
};

export default EtrWhatWeDo;