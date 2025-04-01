import { Box, Grid, Typography } from "@mui/material";
import CardInfo from "./CardInfo";
import ChartHeatRadiation from "./ChartHeatRadiation";
import WeatherStatus from "./WeatherStatus";

// ฟังก์ชันสำหรับแปลงค่าอุณหภูมิเป็นข้อความ
const getTemperatureDescription = (temp) => {
  if (temp >= 35) return "อุณหภูมิ: สูงมาก";
  if (temp >= 28) return "อุณหภูมิ: ปกติ";
  return "อุณหภูมิ: ต่ำ";
};

// ฟังก์ชันสำหรับแปลงค่าความชื้นเป็นข้อความ
const getHumidityDescription = (humidity) => {
  if (humidity >= 70) return "ความชื้น: สูงมาก";
  if (humidity >= 30) return "ความชื้น: ปกติ";
  return "ความชื้น: ต่ำมาก";
};

// ฟังก์ชันสำหรับแสดงสถานะอากาศ
const getWeatherStatus = (temp, humidity) => {
  if (temp >= 35) return { status: "อากาศร้อนจัด", suggestion: "ดื่มน้ำเยอะๆ และหลีกเลี่ยงแสงแดด" };
  if (temp >= 28 && humidity >= 30) return { status: "อากาศดีมาก", suggestion: "สามารถทำกิจกรรมกลางแจ้งได้" };
  if (temp < 28) return { status: "อากาศเย็น", suggestion: "สวมเสื้อกันหนาว" };
  return { status: "สภาพอากาศปกติ", suggestion: "ดูแลสุขภาพให้ดี" };
};

const Dashboard = () => {
  const temperature = 30; // รับค่าจริงจากเซ็นเซอร์ในอนาคต
  const humidity = 20; // รับค่าจริงจากเซ็นเซอร์ในอนาคต

  const weather = getWeatherStatus(temperature, humidity);

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h5" fontWeight="bold">Dashboard</Typography>
      <Typography variant="body2" color="grey">
        ข้อมูล วันที่ {new Date().toLocaleDateString("th-TH")}
      </Typography>

      <Grid container spacing={3} mt={2}>
        <Grid item xs={12} md={6}>
          <CardInfo title="Temperature" value={`${temperature}°`} description={getTemperatureDescription(temperature)} />
        </Grid>
        <Grid item xs={12} md={6}>
          <CardInfo title="Humidity" value={`${humidity}%`} description={getHumidityDescription(humidity)} />
        </Grid>
        <Grid item xs={12}>
          <ChartHeatRadiation />
        </Grid>
        <Grid item xs={12}>
          <WeatherStatus status={weather.status} suggestion={weather.suggestion} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
