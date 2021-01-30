import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Hotels from "./Components/Hotels";
import { HOME, HOTELS } from "./routes";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={HOME} component={Home} exact />
        <Route path={HOTELS} component={Hotels} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
