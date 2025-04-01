import { Card, CardContent, Typography } from "@mui/material";

const CardInfo = ({ title, value, description }) => {
  return (
    <Card sx={{ p: 3 }}>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="h4" fontWeight="bold">{value}</Typography>
        <Typography variant="body2" color="textSecondary">{description}</Typography>
      </CardContent>
    </Card>
  );
};

export default CardInfo;
