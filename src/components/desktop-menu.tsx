import React from 'react';
import {Flex, Text, Link, Image} from "@chakra-ui/react";
import {useStore} from "@nanostores/react";
import {footerTextFont} from "../stores/fonts.store";
import {whiteColorText} from "../stores/contrast.store";
import {grayColorBackground} from "../stores/contrast.store";
import logo from '../assets/images/logo.jpg';

const DesktopMenu = () => {
    const textSize = useStore(footerTextFont)
    const whiteColor = useStore(whiteColorText)
    const grayColorBg = useStore(grayColorBackground)
    return (
        <Flex display={{base:'none', lg:'flex'}} justifyContent={'flex-end'} color={whiteColor} fontWeight='bold' fontSize={'20px'} bgColor={grayColorBg} pr={'50px'}>
            <Image src={logo} width={'150px'} alignItems={'flex-start'} mr={'auto'} ml={'100px'}/>
            <Text alignSelf={'center'} fontSize={`${textSize}px`} as={Link} href={'/'} p={5}>Strona głowna</Text>
            <Text alignSelf={'center'} fontSize={`${textSize}px`} as={Link} href={'/pomoc'} p={5}>Pomoc</Text>
            <Text alignSelf={'center'} fontSize={`${textSize}px`} as={Link} href={'/zwierzeta'} p={5}>Zwierzęta</Text>
            <Text alignSelf={'center'} fontSize={`${textSize}px`} as={Link} href={'/kontakt'} p={5}>Kontakt</Text>
        </Flex>
    );
};

export default DesktopMenu;