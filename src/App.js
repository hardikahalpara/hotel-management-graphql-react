import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Hotels from "./Components/Hotels";
import CreateHotel from "./Components/Hotels/CreateHotel";
import { HOME, HOTELS, CREATEHOTEL } from "./routes";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={HOME} component={Home} exact />
        <Route path={HOTELS} component={Hotels} exact />
        <Route path={CREATEHOTEL} component={CreateHotel} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
