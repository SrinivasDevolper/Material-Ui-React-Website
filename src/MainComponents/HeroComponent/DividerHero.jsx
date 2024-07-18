import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/ShareRounded';

export default function DividerHero() {
  return (
    <Card variant="outlined" sx={{ width:{xs: "100%", md:"560px"} , marginTop:{xs: "40px", md:"0px", marginBottom:{xs: "30px"}}}} >
      <Box sx={{ p: 2 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography gutterBottom variant="h6" component="div" fontWeight="600">
            LEARN AI DEVOLPMENT
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            <ShareIcon />
          </Typography>
        </Stack>
        <Typography variant="h5" fontWeight="600" sx={{
             backgroundImage: "linear-gradient(to right, #2E96FF 0%, #B20DCF 100%)",
             webkitBackgroundClip: "text",
             backgroundClip: "text",
             color: "transparent",
        }}>Post Graduate Program in Data Science</Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <Typography gutterBottom variant="body2">
          Select type
        </Typography>
        <Stack direction="row" spacing={1}>
          <Chip color="primary" label="Download Syllabus" size="large" />
          <Chip color="success" label="Apply Now" size="large" />
        </Stack>
      </Box>
    </Card>
  );
}
