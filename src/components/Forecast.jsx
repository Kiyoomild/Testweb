import React, { useEffect, useState } from "react";

const WeatherCard = ({ time, status, predictedTemperature, isSelected, onSelect }) => {
  const statusLabel = {
    hot: "Hot",
    cold: "Cold",
    warm: "Warm",
  };

  const imageMap = {
    hot: "../src/images/hot.png",
    cold: "../src/images/cold.png",
    warm: "../src/images/happy.png",
  };

  return (
    <div
      style={{
        ...styles.card,
        backgroundColor: isSelected ? "#BDCCFF" : "#2D336B",
        color: isSelected ? "black" : "white",
      }}
      onClick={onSelect}
    >
      <div style={styles.time}>{time}</div>
      <img src={imageMap[status]} alt={status} style={styles.icon2} />
      <div style={styles.statusText}>{statusLabel[status]}</div>
      <div style={styles.predictedTemp}>
        Predicted Temp: {predictedTemperature} °C
      </div>
    </div>
  );
};

const Forecast = ({ onSelectForecast }) => {
  const [weatherData, setWeatherData] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch("https://dataset-sensor-cpe495-b1b0706afa9f.herokuapp.com/weather");
        const data = await response.json();

        const formattedData = [{
          predicted_temperature: parseFloat(data.predicted_temperature.toFixed(2)),
          status: getStatus(parseFloat(data.predicted_temperature.toFixed(2))),
        }];

        setWeatherData(formattedData);
      } catch (error) {
        console.error("Error fetching weather:", error);
      }
    };

    fetchWeather();
    const intervalId = setInterval(fetchWeather, 60000); // fetch ทุก 1 นาที

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // อัปเดตเวลาใหม่ทุก 1 วินาที

    return () => clearInterval(timerId);
  }, []);

  const getStatus = (temp) => {
    if (temp > 26) return "hot";
    if (temp >= 23) return "warm";
    return "cold";
  };  

  const getForecastTime = () => {
    const now = new Date(currentTime);
    let minutes = now.getMinutes();
    let addMinutes = 0;

    if (minutes <= 10) {
      addMinutes = 10 - minutes;
    } else if (minutes <= 20) {
      addMinutes = 20 - minutes;
    } else if (minutes <= 30) {
      addMinutes = 30 - minutes;
    } else if (minutes <= 40) {
      addMinutes = 40 - minutes;
    } else if (minutes <= 50) {
      addMinutes = 50 - minutes;
    } else {
      addMinutes = 60 - minutes; // ข้ามชั่วโมง
    }

    now.setMinutes(minutes + addMinutes);
    now.setSeconds(0);
    now.setMilliseconds(0);

    const hour = now.getHours().toString().padStart(2, "0");
    const minute = now.getMinutes().toString().padStart(2, "0");
    return `${hour}:${minute}`;
  };

  const handleSelect = (index) => {
    if (selectedIndex === index) {
      setSelectedIndex(null);
      onSelectForecast(null);
    } else {
      setSelectedIndex(index);
      const selected = weatherData[index];
      onSelectForecast({
        temperature: selected?.predicted_temperature,
        time: getForecastTime(),
        status: selected?.status,
      });
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>10 Minute Forecast</h2>
      <div id="forecastContainer" style={styles.scrollArea}>
        {weatherData.map((item, index) => (
          <WeatherCard
            key={index}
            time={getForecastTime()}
            status={item.status}
            predictedTemperature={item.predicted_temperature}
            isSelected={index === selectedIndex}
            onSelect={() => handleSelect(index)}
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
  },
  container: {
    overflowX: "auto",
    padding: "2px"
  },
  scrollArea: {
    display: "flex",
    gap: "1rem",
    width: "max-content",
  },
  card: {
    backgroundColor: "#2D336B",
    color: "white",
    padding: "5px",
    borderRadius: "10px",
    width: "300px",
    height: "200px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    cursor: "pointer",
    flexShrink: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  icon2: {
    width: "60px",
    height: "60px",
    objectFit: "contain",
    margin: "6px auto",
  },
  time: {
    fontSize: "12px",
    marginBottom: "4px",
    fontWeight: "bold",
  },
  statusText: {
    fontSize: "16px",
    fontWeight: "500",
    color: "white",
  },
  predictedTemp: {
    fontSize: "14px",
    color: "white",
    marginTop: "8px",
  },
};

export default Forecast;
