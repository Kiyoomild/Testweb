import React, { useEffect, useState } from "react";
import CardInfo from "./CardInfo";
import ChartAirflow from "./ChartAirflow";
import ChartHeatRadiation from "./ChartHeatRadiation";
import WeatherStatus from "./WeatherStatus";

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState("");

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
        <span id="date-display" style={styles.dateText}>{selectedDate}</span> {/* แสดงวันที่ */}
      </div>

      <div style={styles.cardContainer}>
        <div style={styles.cardTem}>
          <CardInfo
            title="Classroom 05-0406"
            value="29°C"
            description="Normal"
            description2="High: 35°C Low: 27°C"
          />
        </div>

        <div style={styles.rightSection}>
          <div style={styles.cardIcon}>
            <CardInfo image="../src/images/happy.png" />
          </div>
          <div style={styles.cardText}>
            <CardInfo
              icons={[
                  { icon: "../src/images/raindrops.png", text: "79%" },
                  { icon: "../src/images/wind.png", text: "9 km/hr" },
                  { icon: "../src/images/sun.png", text: "Low" },
                ]}
            />
          </div>
        </div>
      </div>
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
    fontSize: "24px", // ขนาดตัวอักษรของวันที่
    color: "#2D336B", // สีของข้อความวันที่
    fontWeight: "bold",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: "40px", // ระยะห่างระหว่าง cardTem และ cardIcon
    marginTop: "16px",
    backgroundColor: "skyblue",
    padding: "16px",
    borderRadius: "30px",
    width: "1010px",
    height: "393px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  cardTem: {
    display: "flex",
    marginLeft: "-65px", // ขยับเข้าอีกเล็กน้อย
  },
  cardIcon: {
    display: "flex",
  },
  cardText: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
  },
  rightSection: {
    display: "flex",
    flexDirection: "column", // เรียง cardIcon และ cardText จากบนลงล่าง
    alignItems: "center",
    justifyContent: "center",
    gap: "10px", // ระยะห่างระหว่างรูปและ icons
  },
  
};

export default Dashboard;