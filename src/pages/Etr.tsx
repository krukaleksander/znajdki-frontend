import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { useStore } from "@nanostores/react";
import { smallerHeadingFont, textFont } from "../stores/fonts.store";
import { blackColorText, greenColorText } from "../stores/contrast.store";
import EtrWhatWeDo from "../components/etr/what-we-do";
import EtrOurRules from "../components/etr/our-rules";
import EtrContactWithFoundation from "../components/etr/contact-with-foundation";
import EtrWhatAnimalsNeed from "../components/etr/what-animals-need";
import EtrAboutActivity from "../components/etr/about-activity";
import EtrHowHelp from "../components/etr/how-help";

const Etr = () => {
  const headerFontSize = useStore(smallerHeadingFont);
  const textFontSize = useStore(textFont);
  const textColor = useStore(blackColorText);
  const circleColor = useStore(greenColorText);
  return (
    <Box color={textColor} p={"15px"} fontSize={textFontSize}>
      <Heading fontSize={headerFontSize}>ETR</Heading>
      <Heading fontWeight={"bolder"} fontSize={textFontSize}>
        Fundacja Znajdki istnieje od 2012 roku.
      </Heading>
      <EtrWhatWeDo textFontSize={textFontSize} circleColor={circleColor}/>
      <EtrOurRules textFontSize={textFontSize} circleColor={circleColor}/>
      <EtrHowHelp textFontSize={textFontSize} circleColor={circleColor}/>
      <EtrWhatAnimalsNeed textFontSize={textFontSize} circleColor={circleColor}/>
      <EtrContactWithFoundation textFontSize={textFontSize} circleColor={circleColor}/>
      <EtrAboutActivity textFontSize={textFontSize} circleColor={circleColor}/>
    </Box>
  );
};

export default Etr;
