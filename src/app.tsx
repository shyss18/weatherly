import { useRoutes } from "react-router-dom";
import Forecast from "./common/components/forecast";
import Logo from "./common/components/logo";
import DailyForecast from "./daily-forecast/components/daily-forecast";
import SearchBar from "./search/components/search-bar";
import WeeklyForecast from "./weekly-forecast/components/weekly-forecast";

const App = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Forecast />,
      children: [
        {
          path: "daily",
          element: <DailyForecast />,
        },
        {
          path: "weekly",
          element: <WeeklyForecast />,
        },
      ],
    },
  ]);

  return (
    <>
      <Logo />
      <SearchBar />
      {routes}
    </>
  );
};

export default App;
