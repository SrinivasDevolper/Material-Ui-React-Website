import {Stack} from "@mui/material"

import FirstDisplay from "./FirstDisplay"

import SecondDisplay from "./SecondDisplay"

import ThirdDisplay from "./ThirdDisplay"

const CardDisplay = () => {
    return(
        <Stack direction="row" gap={3} m={4} sx={{display:{xs: "block", sm: "flex"}}}>
            <FirstDisplay />
            <SecondDisplay />
            <ThirdDisplay />
        </Stack>
    )
}

export default CardDisplay