import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material';

const CustomButton = styled(Button)({
    backgroundColor:"green",
})

const ButtonsComponent = () => {
    return (
        <Box style={{border: "1px solid red" }}>
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
            <CustomButton>Custom Button</CustomButton>
        </Box>
    )
}

export default ButtonsComponent