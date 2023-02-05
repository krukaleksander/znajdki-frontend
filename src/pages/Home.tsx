import React from 'react';
import {Box, Image} from "@chakra-ui/react";
import headerImg from '../assets/images/header.jpg';
const Home = () => {
    return (
        <Box>
            <Image m={'10px auto 10px auto'} src={headerImg} display={{base: 'block', lg: 'none'}}/>
        </Box>

    );
};

export default Home;