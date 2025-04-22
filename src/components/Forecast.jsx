import React, { useState } from "react";

// ฟังก์ชันกำหนดสถานะจากอุณหภูมิ
const getWeatherStatus = (temp) => {
  if (temp < 23) return { status: "cold" };
  if (temp <= 27) return { status: "warm" };
  return { status: "hot" };
};

// สร้างข้อมูลทุก 10 นาที (7 ช่วง)
const generateWeatherData = () => {
  const data = [];
  const now = new Date();

  for (let i = 0; i < 70; i += 10) {
    const time = new Date(now.getTime() + i * 60000);
    const hour = time.getHours().toString().padStart(2, "0");
    const minute = time.getMinutes().toString().padStart(2, "0");

    const temp = Math.floor(Math.random() * 15) + 20; // 20-35
    const { status } = getWeatherStatus(temp);

    data.push({
      time: `${hour}:${minute}`,
      status,
    });
  }

  return data;
};

// แผนที่สถานะ -> รูปภาพ
const WeatherImage = ({ status }) => {
  return (
    <div style={styles.iconContainer}>
      {status === "Hot" && (
        <img src="../src/images/hot.png" alt="Hot" style={styles.icon} />
      )}
      {status === "Cold" && (
        <img src="../src/images/cold.png" alt="Cold" style={styles.icon} />
      )}
      {status === "Warm" && (
        <img src="../src/images/happy.png" alt="Warm" style={styles.icon} />
      )}
    </div>
  );
};

// การ์ดแสดงผล
const WeatherCard = ({ time, status, isSelected, onSelect  }) => {
  const statusLabel = {
    hot: "Hot",
    cold: "Cold",
    warm: "Warm",
  };

  // สร้าง imageMap เพื่อเชื่อมโยง status กับ path ของภาพ
  const imageMap = {
    hot: "../src/images/hot.png",  // ใช้พาธที่ถูกต้อง
    cold: "../src/images/cold.png",
    warm: "../src/images/happy.png",
  };

  return (
    <div
      style={{
        ...styles.card,
        backgroundColor: isSelected ? "#BDCCFF" : "#2D336B", // เปลี่ยนสีพื้นหลังเมื่อถูกเลือก
        color: isSelected ? "black" : "white", // เปลี่ยนสีตัวอักษรเมื่อถูกเลือก
      }}
      onClick={onSelect} // เรียกฟังก์ชันเมื่อคลิก
    >
      <div style={styles.time}>{time}</div>
      <img src={imageMap[status]} alt={status} style={styles.icon2} />
      <div style={styles.statusText}>{statusLabel[status]}</div>
    </div>
  );
};

// คอมโพเนนต์หลัก
const Forecast = () => {
  const weatherData = generateWeatherData();
  const [selectedIndex, setSelectedIndex] = useState(null); // เก็บ index ที่ถูกเลือก

  const handleSelect = (index) => {
    setSelectedIndex(index); // อัปเดต index ที่ถูกเลือก
  };

  return (
    <div style={styles.container}>
        <h2 style={styles.title}>10 Minute Forecast</h2>
      <div id="forecastContainer" style={styles.scrollArea}>
        {weatherData.map((item, index) => (
          <WeatherCard 
          key={index} 
          {...item} 
          isSelected={index === selectedIndex} // ตรวจสอบว่าอันนี้ถูกเลือกหรือไม่
            onSelect={() => handleSelect(index)} // ส่งฟังก์ชันเลือกไปยัง WeatherCard
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  title: {
    fontSize: "20px",
    fontWeight: "600",
    color: "#2D336B",
    marginBottom: "1rem",
    position: "sticky",
  },
  container: {
    overflowX: "auto",
    padding: "1.5rem 1rem",
  },
  scrollArea: {
    display: "flex",
    gap: "1rem",
    width: "max-content",
  },
  card: {
    backgroundColor: "#2D336B",
    color: "white",
    padding: "12px",
    borderRadius: "80px",
    minWidth: "20px",
    width: "80px",
    height: "150px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  },
  icon: {
    width: "50px",
    height: "50px",
    objectFit: "contain",
    margin: "6px auto",
  },
  time: {
    fontSize: "12px",
    marginBottom: "4px",
    // fontSize: "14px",
    fontWeight: "bold",
  },
  statusText: {
    fontSize: "16px",
    marginTop: "2px",
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  icon2: {
    width: "90px",
    height: "90px",
    objectFit: "contain",
  },
};

export default Forecast;