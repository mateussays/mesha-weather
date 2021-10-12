import "./App.css";
import WeatherProvider from "./context/WeatherProvider";
import Home from "./pages/Home";

function App() {
  return (
    <WeatherProvider>
      <Home />
    </WeatherProvider>
  );
}

export default App;
