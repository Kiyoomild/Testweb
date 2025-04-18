import React from "react";
import WbSunnyIcon from "@mui/icons-material/WbSunny"; // ใช้ไอคอนจาก MUI แต่ยังคงใช้ในโค้ดนี้
//import WbCloudyIcon from "@mui/icons-material/WbCloudy";

const WeatherStatus = ({ status, suggestion }) => {
  return (
    <div style={styles.card}>
      <WbSunnyIcon style={styles.icon} />
      { /*<WbCloudyIcon style={styles.icon} /> */}
      <div style={styles.content}>
        <h6 style={styles.status}>{status}</h6>
        <p style={styles.suggestion}>{suggestion}</p>
      </div>
    </div>
  );
};

const styles = {
  card: {
    display: "flex",
    alignItems: "center",
    padding: "16px",
    backgroundColor: "#f8f9fa",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  icon: {
    fontSize: "50px",
    color: "orange",
    marginRight: "16px",
  },
  content: {
    display: "flex",
    flexDirection: "column",
  },
  status: {
    fontSize: "18px",
    fontWeight: "bold",
    margin: "0",
  },
  suggestion: {
    fontSize: "14px",
    color: "#6c757d",
    margin: "0",
  },
};

export default WeatherStatus;

