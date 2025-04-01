import React, { useState } from "react";
import CardInfo from "./CardInfo";
import ChartAirflow from "./ChartAirflow";
import ChartHeatRadiation from "./ChartHeatRadiation";
import WeatherStatus from "./WeatherStatus";

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState(""); // เก็บวันที่ที่เลือก

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value); // อัปเดตวันที่เมื่อผู้ใช้เลือก
  };

  return (
    <div style={styles.container}>
      <h5 style={styles.header}>Dashboard</h5>
      <div style={styles.dateContainer}>
        <label htmlFor="date-picker" style={styles.dateLabel}>เลือกวันที่:</label>
        <input
          id="date-picker"
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          style={styles.dateInput}
        />
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
    height: "calc(100vh - 50px)", // ลดความสูงของ Dashboard
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
    fontSize: "20px",
    color: "#000000",
  },
  dateInput: {
    fontSize: "16px",
    padding: "4px 8px",
    borderRadius: "4px",
    outline: "none", // ลบกรอบเมื่อคลิก
    backgroundColor: "#2d336b", // เพิ่มสีพื้นหลัง (ถ้าต้องการ)
    color: "#f4f4f4", // กำหนดสีข้อความ
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
    color: "#000000", // เปลี่ยนสีฟอนต์
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