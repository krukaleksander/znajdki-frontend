import React from 'react';
import {Menu, MenuButton, MenuItem, MenuList, Link, Flex, Image} from "@chakra-ui/react";
import {footerTextFont} from '../stores/fonts.store';
import {useStore} from "@nanostores/react";
import {whiteColorBackground, blackColorText} from "../stores/contrast.store";
import logo from '../assets/images/logo.jpg';
import {FaBars} from "react-icons/fa";

const MenuMobile = () => {
    const fontSize = useStore(footerTextFont)
    const whiteColor = useStore(whiteColorBackground)
    const blackColor = useStore(blackColorText)
    const bgColor = useStore(whiteColorBackground)
    return (
        <Flex display={{base: 'flex', lg:'none'}} bgColor={bgColor} justifyContent={'center'} alignItems={'center'} minHeight={'80px'}>
            <Image src={logo} width={'120px'}/>
            <Menu>
                <MenuButton zIndex={2} display={{lg:'none'}} fontSize={'25px'} color={'black'} pos={'absolute'} top={'30px'} right={'10px'}>
                    <FaBars />
                </MenuButton>
                <MenuList fontSize={fontSize} color={blackColor} bgColor={whiteColor}>
                    <MenuItem bgColor={whiteColor} as={Link} href={'/'}>Home</MenuItem>
                    <MenuItem bgColor={whiteColor} as={Link} href={'/pomoc'}>Pomoc</MenuItem>
                    <MenuItem bgColor={whiteColor} as={Link} href={'/zwierzeta'}>Zwierzęta</MenuItem>
                    <MenuItem bgColor={whiteColor} as={Link} href={'/kontakt'}>Kontakt</MenuItem>
                </MenuList>
            </Menu>
        </Flex>

    );
};
export default MenuMobile;