import React from "react";
import PropTypes from "prop-types";
import WeatherStatus from "./WeatherStatus";

const CardInfo = ({
  title,
  value,
  description,
  description2,
  description3,
  image,
  icons,
  temperature,
}) => {
  return (
    <div style={styles.card}>
      {/* ถ้ามี temperature แสดง WeatherStatus, ถ้าไม่มี ค่อยแสดง image */}
      {temperature ? (
        <WeatherStatus temperature={temperature} />
      ) : (
        image && <img src={image} alt="Card Icon" style={styles.image} />
      )}

      {title?.trim() && <p style={styles.title}>{title}</p>}
      {value?.trim() && <p style={styles.value}>{value}</p>}
      {description?.trim() && <p style={styles.description}>{description}</p>}
      {description2?.trim() && (
        <p style={styles.description2}>{description2}</p>
      )}
      {description3?.trim() && (
        <p style={styles.description3}>{description3}</p>
      )}

      {icons?.length > 0 && (
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
    width: "500px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
  },
  image: {
    width: "400px",
    height: "400px",
    marginBottom: "0px",
    // marginBottom: "0px",
    objectFit: "contain", // ป้องกันภาพบิด
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
  iconContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "4px",
    marginTop: "0px",
  },
  iconItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: "6px",
    width: "100%",
  },
  icon: {
    width: "30px",
    height: "30px",
  },
  iconText: {
    fontSize: "24px",
    fontWeight: "bold",
    marginLeft: "10px",
    color: "black",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "30px",
    color: "black",
  },
  value: {
    fontSize: "76px",
    color: "black",
    margin: "1px 0",
  },
  description: {
    fontSize: "26px",
    fontWeight: "bold",
    color: "black",
    marginBottom: "2px",
  },
  description2: {
    fontSize: "21px",
    fontWeight: "bold",
    color: "black",
    marginTop: "2px",
  },
  description3: {
    fontSize: "15px",
    color: "black",
    marginTop: "2px",
  },
};

CardInfo.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  description: PropTypes.string,
  description2: PropTypes.string,
  description3: PropTypes.string,
  image: PropTypes.string,
  icons: PropTypes.array,
  temperature: PropTypes.number,
};

export default CardInfo;
