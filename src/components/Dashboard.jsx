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

      <div style={styles.grid}>
        {/* Temperature Section */}
        <div style={styles.gridItem}>
          <CardInfo header="Temperature" title="Temperature" value="30°" description="อุณหภูมิ: ปกติ" />
        </div>

        {/* Humidity Section */}
        <div style={styles.gridItem}>
          <CardInfo header="Humidity" title="Humidity" value="20%" description="ความชื้น: ต่ำมาก" />
        </div>

        {/* Status Section */}
        <div style={styles.gridItem2}>
          <WeatherStatus status="อากาศดีมาก" suggestion="ดื่มน้ำเยอะๆ" />
        </div>

        {/* Other Sections */}
        <div style={styles.fullWidthItem}>
          <ChartAirflow />
        </div>
        <div style={styles.fullWidthItem}>
          <ChartHeatRadiation />
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
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "16px",
    marginTop: "16px",
    marginBottom: "8px",
  },
  gridItem: {
    backgroundColor: "#f8f9fa",
    borderRadius: "8px",
    padding: "16px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    color: "#000000",
    fontSize: "25px",
  },
  gridItem2: {
    backgroundColor: "#f8f9fa",
    borderRadius: "8px",
    padding: "16px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    color: "#000000",
    fontSize: "25px",
  },
  fullWidthItem: {
    gridColumn: "span 3",
    backgroundColor: "#f8f9fa",
    borderRadius: "8px",
    padding: "16px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    color: "#000000",
  },
};

export default Dashboard;