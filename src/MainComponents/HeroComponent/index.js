import { Box, Stack, Typography } from "@mui/material"
import DividerHero from "./DividerHero"

const HeroComponent = () => {
 return(
    <Stack direction="row" spacing={2} justifyContent="space-between" alignItems="center" sx={{display: {xs: "block", sm: "block", md: "flex"}}}>
        <Box>
            <DividerHero />
        </Box>
        <Box sx={{width:{xs: "90%", md: "400px"}, display:"flex", justifyContent:"center", alignItems: "center"}}>
            <img style={{width: "100%"}} src="https://static.vecteezy.com/system/resources/thumbnails/026/910/897/small_2x/happy-student-boy-with-books-isolated-png.png" alt="hero image" />
        </Box>
    </Stack>
 )    
}

export default HeroComponent