import { Card, CardContent, Typography } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

const WeatherStatus = ({ status, suggestion }) => {
  return (
    <Card sx={{ display: "flex", alignItems: "center", p: 2 }}>
      <WbSunnyIcon sx={{ fontSize: 50, color: "orange", mr: 2 }} />
      <CardContent>
        <Typography variant="h6">{status}</Typography>
        <Typography variant="body2" color="textSecondary">{suggestion}</Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherStatus;
