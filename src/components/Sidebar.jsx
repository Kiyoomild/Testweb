import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CloudIcon from "@mui/icons-material/Cloud";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";
import { Margin } from "@mui/icons-material";

const Sidebar = () => {
  const [selected, setSelected] = useState("Dashboard");
  const navigate = useNavigate(); // ใช้เพื่อเปลี่ยนเส้นทาง

  const handleSelect = (item, path) => {
    setSelected(item); // เปลี่ยนสถานะรายการที่เลือก
    navigate(path); // เปลี่ยนหน้าเมื่อเลือกเมนู
  };

  return (
    <div style={styles.sidebar}>
      <div style={styles.header}>
        <h6 style={styles.title}>CLIMATIC FLOW</h6>
      </div>
      <ul style={styles.list}>
        <h3 style={styles.menu}>MENU</h3>
        <li
          style={selected === "Dashboard" ? styles.selectedItem : styles.listItem}
          onClick={() => handleSelect("Dashboard", "/")}
        >
          <DashboardIcon style={styles.icon} />
          <span>Dashboard</span>
        </li>
        <li
          style={selected === "Forecast" ? styles.selectedItem : styles.listItem}
          onClick={() => handleSelect("Forecast", "/forecast")}
        >
          <CloudIcon style={styles.icon} />
          <span>Forecast</span>
        </li>
        <li
          style={selected === "Notifications" ? styles.selectedItem : styles.listItem}
          onClick={() => handleSelect("Notifications", "/notifications")}
        >
          <NotificationsIcon style={styles.icon} />
          <span>Notifications</span>
        </li>
      </ul>
      <ul style={styles.footerList}>
        <li
          style={selected === "Settings" ? styles.selectedItem : styles.listItem}
          onClick={() => handleSelect("Settings", "/settings")}
        >
          <SettingsIcon style={styles.icon} />
          <span>Settings</span>
        </li>
        <li
          style={selected === "Help" ? styles.selectedItem : styles.listItem}
          onClick={() => handleSelect("Help", "/help")}
        >
          <HelpIcon style={styles.icon} />
          <span>Help</span>
        </li>
      </ul>
    </div>
  );
};

// Styles สำหรับคอมโพเนนต์ (ใส่สไตล์ที่เหมาะสม)
const styles = {
  sidebar: {
    width: 240,
    padding: '15px',
    margin: '25px',
    borderRadius: '15px',
    backgroundColor: '#2D336B',
    display: "flex",
    flexDirection: "column",
  },
  header: {
    display: "flex", // ใช้ Flexbox
    justifyContent: "center", // จัดให้อยู่ตรงกลางแนวนอน
    alignItems: "center",
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textAlign: "center",
  },
  list: {
    listStyleType: 'none',
    paddingLeft: 0,
  },
  menu: {
    fontSize: '1.2rem',
    fontWeight: "normal",
    marginLeft: "10px",
    marginBottom: "20px",
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '20px',
    cursor: 'pointer',
    fontSize: '18px',
    borderRadius: '15px',
    transition: 'background-color 0.3s',
  },
  selectedItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '15px 15px',
    borderRadius: '15px',
    cursor: 'pointer',
    fontSize: '18px',
    backgroundColor: '#A9B5DF',
    color: 'white',
  },
  icon: {
    marginRight: '15px',
    fontSize: '30px',
  },
  footerList: {
    marginTop: 'auto',
  },
};

export default Sidebar;
