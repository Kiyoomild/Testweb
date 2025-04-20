import React, { useEffect, useState } from "react";
import CardInfo from "./CardInfo";
import ChartAirflow from "./ChartAirflow";
import ChartHeatRadiation from "./ChartHeatRadiation";
import WeatherStatus from "./WeatherStatus";
import Forecast from "./Forecast";

const Dashboard = () => {
    const [selectedDate, setSelectedDate] = useState("");
    const [temperature, setTemperature] = useState(30);  // ตั้งค่าอุณหภูมิเริ่มต้น
    const [humidity, setHumidity] = useState(79);        // ตั้งค่าความชื้นเริ่มต้น
    const [windSpeed, setWindSpeed] = useState(9);

  // ตั้งค่าเริ่มต้นเป็นวันที่ปัจจุบันในรูปแบบ dd/mm/yy
  useEffect(() => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0"); // ดึงวันที่และเติม 0 ด้านหน้า (ถ้าจำเป็น)
    const month = String(today.getMonth() + 1).padStart(2, "0"); // ดึงเดือน (เริ่มจาก 0) และเติม 0 ด้านหน้า
    const year = String(today.getFullYear()); // ดึงปีแบบเต็ม (4 หลัก)
    const formattedDate = `${day}/${month}/${year}`; // แปลงเป็นรูปแบบ dd/mm/yyyy
    setSelectedDate(formattedDate);
  }, []);

  return (
    <div style={styles.container}>
        <div style={styles.header}>Dashboard</div>

            <div style={styles.dateContainer}>
                <label htmlFor="date-display" style={styles.dateLabel}>วันที่:</label>
                <span id="date-display" style={styles.dateText}>{selectedDate}</span>
            </div>

            <div style={styles.cardWrapper}>
                <div style={styles.leftSection}>
                    <CardInfo
                        title="Classroom 05-0406"
                        value={`${temperature}°C`}
                        description="Normal"
                        description2={`High: 35°C Low: 27°C`}
                    />
                </div>

                <div style={styles.rightSection}>
                    <div style={styles.cardContent}>
                        <div style={styles.cardIcon}>
                            <WeatherStatus temperature={temperature} />
                        </div>
                    <div style={styles.cardText}>
                        <CardInfo
                            icons={[
                                { icon: "../src/images/raindrops.png", text: `${humidity}%` },
                                { icon: "../src/images/wind.png", text: `${windSpeed} km/hr` },
                                { icon: "../src/images/sun.png", text: "Low" },
                            ]}
                        />
                    </div>
                </div>
            </div>
        </div>
        <Forecast />
    </div>

  );
};

const styles = {
    container: {
      padding: "24px",
      fontFamily: "Arial, sans-serif",
      height: "calc(100vh - 50px)",
      overflow: "auto",
    },
    header: {
      fontWeight: "bold",
      fontSize: "36px",
      color: "#2D336B",
    },
    dateContainer: {
      marginBottom: "16px",
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
    dateLabel: {
      fontSize: "26px",
      color: "#000000",
    },
    dateText: {
      fontSize: "24px",
      color: "#2D336B",
      fontWeight: "bold",
    },
    cardWrapper: {
      display: "flex",
      flexWrap: "wrap",              // ✅ ให้ wrap เมื่อพื้นที่ไม่พอ
      flexDirection: "row",          // ✅ เริ่มต้นแนวนอน
      gap: "24px",
      backgroundColor: "skyblue",
      borderRadius: "20px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",                 // ✅ ขยายเต็ม container
      maxWidth: "100%",              // ✅ ไม่เกิน container
      },
    leftSection: {
      flex: "1 1 300px", // ✅ ให้ยืดหยุ่นตามขนาดหน้าจอ
      minWidth: "300px", // ✅ กำหนดขนาดขั้นต่ำ
    },
    rightSection: {
      flex: "1 1 300px",
      minWidth: "300px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      padding: "16px",
      },
    cardContent: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "20px",
        padding: "24px 32px",
        gap: "24px",
        width: "280px",
      },
      cardIcon: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      cardText: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        gap: "16px",
        width: "100%",
      },

    cardForecast: {
      backgroundColor: "#fff",
      borderRadius: "20px",
      padding: "24px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      marginTop: "24px",
    },
  };
  
export default Dashboard;