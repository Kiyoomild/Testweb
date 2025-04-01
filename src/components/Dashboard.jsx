import { Box, Grid, Typography } from "@mui/material";
import CardInfo from "./CardInfo";
import ChartAirflow from "./ChartAirflow";
import ChartHeatRadiation from "./ChartHeatRadiation";
import WeatherStatus from "./WeatherStatus";

const Dashboard = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h5" fontWeight="bold">Dashboard</Typography>
      <Typography variant="body2" color="textSecondary">ข้อมูล วันที่ DD/MM/YYYY</Typography>

      <Grid container spacing={3} mt={2}>
        <Grid item xs={12} md={6}>
          <CardInfo title="Temperature" value="30°" description="อุณหภูมิ: ปกติ" />
        </Grid>
        <Grid item xs={12} md={6}>
          <CardInfo title="Humidity" value="20%" description="ความชื้น: ต่ำมาก" />
        </Grid>
        <Grid item xs={12}>
          <ChartAirflow />
        </Grid>
        <Grid item xs={12}>
          <ChartHeatRadiation />
        </Grid>
        <Grid item xs={12}>
          <WeatherStatus status="อากาศดีมาก" suggestion="ดื่มน้ำเยอะๆ" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
