import React from 'react';
import {Flex, Text, Link} from "@chakra-ui/react";
import {useStore} from "@nanostores/react";
import {footerTextFont} from "../stores/fonts.store";
import {greenColorText} from "../stores/contrast.store";

const DesktopMenu = () => {
    const textSize = useStore(footerTextFont)
    const blueColor = useStore(greenColorText)
    return (
        <Flex display={{base:'none', lg:'flex'}} color={blueColor} fontWeight='bold' fontSize={'20px'}>
            <Text fontSize={`${textSize}px`} as={Link} href={'/'} p={5}>Strona głowna</Text>
            <Text fontSize={`${textSize}px`} as={Link} href={'/pomoc'} p={5}>Pomoc</Text>
            <Text fontSize={`${textSize}px`} as={Link} href={'/zwierzeta'} p={5}>Zwierzęta</Text>
            <Text fontSize={`${textSize}px`} as={Link} href={'/kontakt'} p={5}>Kontakt</Text>
        </Flex>
    );
};

export default DesktopMenu;