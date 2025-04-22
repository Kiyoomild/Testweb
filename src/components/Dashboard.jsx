import React, { useEffect, useState } from "react";
import CardInfo from "./CardInfo";
import WeatherStatus from "./WeatherStatus";
import Forecast from "./Forecast";

// 👉 เพิ่ม Firebase
//import { database, ref, onValue } from "./firebase";

const Dashboard = () => {
    const [selectedDate, setSelectedDate] = useState("");
    const [temperature, setTemperature] = useState(0);  // ค่าเริ่มต้น
    const [humidity, setHumidity] = useState(0);        // ค่าเริ่มต้น

    // ตั้งค่าเป็นวันที่ปัจจุบัน
    useEffect(() => {
        const today = new Date();
        const day = String(today.getDate()).padStart(2, "0");
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const year = String(today.getFullYear());
        const formattedDate = `${day}/${month}/${year}`;
        setSelectedDate(formattedDate);
    }, []);

    // 🔥 ใช้ Firebase Realtime Database เพื่อรับค่าอัปเดต
    {/*useEffect(() => {
        const sensorRef = ref(database, "sensor/data");
        const unsubscribe = onValue(sensorRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                setTemperature(data.temperature);
                setHumidity(data.humidity);
            }
        });

        return () => unsubscribe(); // cleanup
    }, []);
    */}

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
                        // description2={`High: 35°C Low: 27°C`}
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
        flexWrap: "wrap",
        flexDirection: "row",
        gap: "24px",
        backgroundColor: "skyblue",
        borderRadius: "20px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        maxWidth: "100%",
    },
    leftSection: {
        flex: "1 1 300px",
        minWidth: "300px",
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