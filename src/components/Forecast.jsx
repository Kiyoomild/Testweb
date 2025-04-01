import { Box, Typography } from "@mui/material";

const Forecast = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h5" fontWeight="bold">Forecast</Typography>
      <Typography variant="body2" color="grey">
        ข้อมูล วันที่ {new Date().toLocaleDateString("th-TH")}
      </Typography>
    </Box>
  );
};

export default Forecast;
