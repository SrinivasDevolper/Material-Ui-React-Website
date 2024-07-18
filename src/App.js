import BoxComponent from "./MaterailComponents/BoxComponent"

import ButtonsComponent from "./MaterailComponents/ButtonsComponent"

import { Box, Container, createTheme, ThemeProvider } from "@mui/material"

import NavBarComponent from "./MainComponents/NavbarComponent"

import HeroComponent from './MainComponents/HeroComponent'

import AccordionComponent from "./MainComponents/AccordionComponent"

import CardDisplay from "./MainComponents/CardComponents/CardDisplay"

import TabsSection from "./MainComponents/TabsComponent/TabsSection"

import MainGraphSection from "./MainComponents/GraphComponents/MainGraphSection"

import { useState } from "react"

const App = () => {
  const [mode, setMode] = useState("light")

  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"}>
        <Container>
          <NavBarComponent mode={mode} setMode={setMode} />
          <HeroComponent />
          <AccordionComponent />
          <CardDisplay />
          <TabsSection />
          <MainGraphSection />
          {/* <BoxComponent /> */}
          {/* <ButtonsComponent /> */}
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;