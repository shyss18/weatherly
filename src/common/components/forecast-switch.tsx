import { Link } from "react-router-dom";
import "../styles/forecast-switch.css";

interface ForecastSwitchProps {
  isForecastLoaded: boolean;
}

const ForecastSwitch = (props: ForecastSwitchProps) => {
  const renderForecast = (): JSX.Element => {
    return (
      <div className="forecast-switch-wrapper">
        <div className="forecast-switch">
          <Link to="/daily" className="forecast-daily">
            daily
          </Link>
          <Link to="/weekly" className="forecast-weekly">
            weekly
          </Link>
        </div>
      </div>
    );
  };

  return <>{props.isForecastLoaded ? renderForecast() : null}</>;
};

export default ForecastSwitch;
