import React from 'react';
import {Heading, List, ListIcon, ListItem} from "@chakra-ui/react";
import {MdCheckCircle} from "react-icons/md";

const EtrWhatAnimalsNeed = ({textFontSize, circleColor}) => {
    return (
        <div>
            <Heading
                fontSize={textFontSize}
                p={"20px 0px 20px 0px"}
                fontWeight={"bolder"}
            >
                Co potrzebne jest zwierzętom:
            </Heading>

            <List spacing={3} textAlign={'left'}>
                <ListItem>
                    <ListIcon as={MdCheckCircle} color={circleColor} />
                    karma sucha i w puszkach
                </ListItem>
                <ListItem>
                    <ListIcon as={MdCheckCircle} color={circleColor} />
                    środki czystości
                </ListItem>
                <ListItem>
                    <ListIcon as={MdCheckCircle} color={circleColor} />
                    podkłady higieniczne, ręczniki jednorazowe
                </ListItem>
                <ListItem>
                    <ListIcon as={MdCheckCircle} color={circleColor} />
                    ręczniki, koce
                </ListItem>
                <ListItem>
                    <ListIcon as={MdCheckCircle} color={circleColor} />
                    zabawki dla zwierząt
                </ListItem>
                <ListItem>
                    <ListIcon as={MdCheckCircle} color={circleColor} />
                    środki na pchły i kleszcze
                </ListItem>
                <ListItem>
                    <ListIcon as={MdCheckCircle} color={circleColor} />
                    preparaty odrobaczające
                </ListItem>
            </List>
        </div>
    );
};

export default EtrWhatAnimalsNeed;