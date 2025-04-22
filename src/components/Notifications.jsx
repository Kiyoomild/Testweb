import React, { useState, useEffect } from "react";
import Hot from "../images/hot.png";
import Cold from "../images/cold.png";

const Notifications = () => {
  const [temperature, setTemperature] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [notificationTime, setNotificationTime] = useState({ date: "", time: "" });
  const [status, setStatus] = useState("");  // เพิ่มสถานะของอุณหภูมิ

  useEffect(() => {
    const temp = 20;
    const hum = 50;
    const now = new Date();
  
    const date = now.toLocaleDateString(); // เช่น 22/4/2025
    const time = now.toLocaleTimeString(); // เช่น 14:35:22
  
    setTemperature(temp);
    setHumidity(hum);
    setNotificationTime({ date, time }); // แยกเก็บเป็น object
  
    let message = "";
    if (temp < 22) {
      setStatus("Cold");
      message += "⚠️ อุณหภูมิต่ำเกินไป";
    } else if (temp > 28) {
      setStatus("Hot");
      message += "⚠️ อุณหภูมิสูงเกินไป";
    }
  
    if (hum < 48) {
      message += " | ความชื้นต่ำเกินไป";
    } else if (hum > 67) {
      message += " | ความชื้นสูงเกินไป";
    }
  
    setNotificationMessage(message);
  }, []);
   // effect ที่ทำงานครั้งเดียวเมื่อ component ถูก mount

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Notification</h1>
      {notificationMessage && (
        <div style={styles.notificationBox}>
        <div style={styles.notificationHeader}>
          <p style={styles.notificationDate}>Date: {notificationTime.date}</p>
          <p style={styles.notificationTiming}>Time: {notificationTime.time}</p>
        </div>
      
        <div style={styles.contentRow}>
          <div style={styles.messageColumn}>
            <p style={styles.notificationMessage}>{notificationMessage}</p>
            <div style={styles.values}>
              <p>อุณหภูมิ: {temperature}°C</p>
              <p>ความชื้น: {humidity}%</p>
            </div>
          </div>
          {status === "Hot" && <img src={Hot} alt="Hot" style={styles.icon} />}
          {status === "Cold" && <img src={Cold} alt="Cold" style={styles.icon} />}
        </div>
      </div>
      )}
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
  title: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#2D336B",
    marginBottom: "20px",
  },
  notificationBox: {
    backgroundColor: "#f1f1f1",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "90%",
    margin: "0 auto",
    //marginTop: "10px",
  },
  notificationHeader: {
    display: "flex",
  },
  notificationDate: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#2D336B",
    justifyContent: "left",
  },
  notificationTiming: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#2D336B",
    justifyContent: "right",
    marginLeft: "auto",
  },
  icon: {
    width: "200px",
    height: "200px",
  },
  notificationMessage: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#ff5c5c",
    marginBottom: "10px",
  },
  values: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#000",
  },
  notificationBox: {
    backgroundColor: "#f1f1f1",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "90%",
    margin: "0 auto",
    marginTop: "10px",
  },
  contentRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  messageColumn: {
    flex: 1,
  },
  
};

export default Notifications;
