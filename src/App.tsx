import React from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Router";
import MenuMobile from "./components/menu-mobile";
import DesktopMenu from "./components/desktop-menu";
import AccessMenu from "./components/access-menu";
import { useStore } from "@nanostores/react";
import { whiteColorBackground } from "./stores/contrast.store";
import Footer from "./components/footer";

function App() {
  const bgColor = useStore(whiteColorBackground);
  return (
    <ChakraProvider>
      <div className="App" style={{ backgroundColor: bgColor }}>
        <div className="Wrapper">
          <MenuMobile />
          <AccessMenu />
          <DesktopMenu />
          <RouterProvider router={router} />
          <Footer />
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
