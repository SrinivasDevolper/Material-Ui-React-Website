import { Stack } from "@mui/material"

import FirstChart from "./FirstChart"

import SecondChart from "./SecondChart"

const MainGraphSection = () => {
    return <Stack direction="row">
            <FirstChart />
            <SecondChart />
        </Stack>
}

export default MainGraphSection