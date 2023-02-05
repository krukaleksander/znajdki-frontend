import React from 'react';
import {
    Box,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    Image,
    useDisclosure
} from "@chakra-ui/react";
import InvalidSing from '../assets/images/invalid.png';
import Normal from '../assets/images/normal.png';
import BlackWhite from '../assets/images/black_white.png';
import WhiteBlack from '../assets/images/white_black.png';
import YellowBlack from '../assets/images/yellow_black.png';
import ETR from '../assets/images/etr.jpg';
import {FaMinus, FaPlus} from "react-icons/fa";
import {increaseFonts, decreaseFonts } from "../stores/fonts.store";
import {normalizeColors, setBlackBackgroundWhiteText, setBlackBackgroundYellowText, setYellowBackgroundBlackText} from "../stores/contrast.store";

const AccessMenu = () => {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const boxRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
    return (
        <Box ref={boxRef} w={'40px'} zIndex={2} pos={{base: "absolute", lg:'fixed'}} top={'30px'} left={'5px'} onClick={onOpen} bgColor={'white'}>
            <Image src={InvalidSing} cursor={'pointer'}/>
            <Drawer isOpen={isOpen} placement='top' onClose={onClose} finalFocusRef={boxRef}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton fontSize={'20px'}/>
                    <DrawerHeader p={'10px 24px'} textAlign={'center'}>Rozmiar czcionki:</DrawerHeader>
                    <DrawerBody>
                        <Flex justifyContent={{base: 'center'}} alignItems={'center'} gap={'30px'}>
                            <Box cursor={'pointer'} border={'1px solid black'} p={'5px'} fontSize={'25px'} onClick={() => increaseFonts(1)}><FaPlus/></Box>
                            <Box cursor={'pointer'} border={'1px solid black'} p={'5px'} fontSize={'25px'} onClick={() => decreaseFonts(1)}><FaMinus/></Box>
                        </Flex>
                    </DrawerBody>
                    <DrawerHeader textAlign={'center'}>Kontrast:</DrawerHeader>
                    <Flex justifyContent={{base: 'center'}} alignItems={'center'} gap={'15px'}>
                        <Box cursor={'pointer'} border={'1px solid black'} p={'5px'} w={'60px'} onClick={() => normalizeColors()}><Image src={Normal}/></Box>
                        <Box cursor={'pointer'} border={'1px solid black'} p={'5px'} w={'60px'} onClick={() => setBlackBackgroundWhiteText()}><Image src={BlackWhite}/></Box>
                        <Box cursor={'pointer'} border={'1px solid black'} p={'5px'} w={'60px'} onClick={() => setBlackBackgroundYellowText()}><Image src={WhiteBlack}/></Box>
                        <Box cursor={'pointer'} border={'1px solid black'} p={'5px'} w={'60px'} onClick={() => setYellowBackgroundBlackText()}><Image src={YellowBlack}/></Box>
                    </Flex>
                    <DrawerHeader textAlign={'center'}>ETR:</DrawerHeader>
                    <Flex justifyContent={{base: 'center'}} alignItems={'center'} gap={'15px'} pb={'20px'}>
                        <Image src={ETR} w={'60px'} cursor={'pointer'}/>
                    </Flex>
                </DrawerContent>
            </Drawer>
        </Box>

    );
};

export default AccessMenu;