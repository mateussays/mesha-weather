import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import WeatherProvider from "./context/WeatherProvider";
import FavoritesSongs from "./pages/FavoritesSongs";
import Home from "./pages/Home";

function App() {
  return (
    <WeatherProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/favorites" component={ FavoritesSongs } />
        </Switch>
      </BrowserRouter>
    </WeatherProvider>
  );
}

export default App;
