import React from 'react';
import {Menu, MenuButton, MenuItem, MenuList, Button, Link} from "@chakra-ui/react";
import {footerTextFont} from '../stores/fonts.store';
import {useStore} from "@nanostores/react";
import {whiteColorBackground, blackColorText} from "../stores/contrast.store";

const MenuMobile = () => {
    const fontSize = useStore(footerTextFont)
    const whiteColor = useStore(whiteColorBackground)
    const blackColor = useStore(blackColorText)
    return (
        <Menu>
            <MenuButton as={Button} colorScheme='pink' zIndex={2} pos="fixed" top={'5px'} right={'5px'} display={{lg:'none'}}>
                Menu
            </MenuButton>
            <MenuList fontSize={fontSize} color={blackColor} bgColor={whiteColor}>
                <MenuItem bgColor={whiteColor} as={Link} href={'/'}>Home</MenuItem>
                <MenuItem bgColor={whiteColor} as={Link} href={'/pomoc'}>Pomoc</MenuItem>
                <MenuItem bgColor={whiteColor} as={Link} href={'/zwierzeta'}>Zwierzęta</MenuItem>
                <MenuItem bgColor={whiteColor} as={Link} href={'/kontakt'}>Kontakt</MenuItem>
            </MenuList>
        </Menu>
    );
};
export default MenuMobile;