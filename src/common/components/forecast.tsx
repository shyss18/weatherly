import { Outlet } from "react-router-dom";
import ForecastSwitch from "./forecast-switch";
import "../styles/forecast.css";
import { useState } from "react";
import NoWeather from "./no-weather";

const Forecast = () => {
  const [forecaseLoaded, setForecastStatus] = useState<boolean>(true);

  return (
    <>
      <ForecastSwitch isForecastLoaded={forecaseLoaded} />
      <div className="forecast-content">
        {forecaseLoaded ? <Outlet /> : <NoWeather />}
      </div>
    </>
  );
};

export default Forecast;
