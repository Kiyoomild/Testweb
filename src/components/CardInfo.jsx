import React from "react";
import PropTypes from "prop-types";

const CardInfo = ({ title, value, description, description2, description3, image, icons }) => {
  return (
    <div style={styles.card}>
      {image && <img src={image} alt="Card Icon" style={styles.image} />} {/* แสดงรูปภาพถ้ามี */}
      <h8 style={styles.title}>{title}</h8>
      <p style={styles.value}>{value}</p>
      <p style={styles.description}>{description}</p>
      {description2 && <p style={styles.description2}>{description2}</p>} {/* แสดง description2 ถ้ามี */}
      {description2 && <p style={styles.description3}>{description3}</p>}
      {icons && (
        <div style={styles.iconContainer}>
          {icons.map((item, index) => (
            <div key={index} style={styles.iconItem}>
              <img src={item.icon} alt="Icon" style={styles.icon} />
              <span style={styles.iconText}>{item.text}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  card: {
    padding: "5px",
    marginTop: "50px",
    width: "500px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start", // ช่วยให้เนื้อหาจัดจากด้านบน
    gap: "8px", // ระยะห่างรวมระหว่างแต่ละบล็อก
  },
  image: {
    width: "280px",
    height: "280px",
    marginBottom: "0px", // เอาระยะห่างใต้ออก
  },
  
  iconContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "4px", // ลดระยะระหว่างแต่ละ icon ลง
    marginTop: "0px", // ไม่ต้องเว้นจากด้านบน
  },
  
  iconItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: "6px", // ใช้ gap แทน margin เพื่อระยะพอดี
  },
  
  icon: {
    width: "20px",  // เล็กลงเล็กน้อย
    height: "20px",
  },
  
  iconText: {
    fontSize: "18px",
    color: "black",
    // ลบ marginLeft ออก ถ้าใช้ gap แล้ว
    marginLeft: "0px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "regular",
    marginBottom: "30px",
    color: "black",
  },
  value: {
    fontSize: "76px",
    color: "black",
    margin: "4px 0",
  },
  description: {
    fontSize: "26px",
    color: "black",
    fontWeight: "regular",
    marginBottom: "2px",
  },
  description2: {
    fontSize: "15px",
    color: "black",
    marginTop: "2px",
  },
  description3: {
    fontSize: "15px",
    color: "black",
    marginTop: "2px",
  },
};

export default CardInfo;