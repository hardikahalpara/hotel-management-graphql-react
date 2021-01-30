import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import { HOME } from "./routes";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={HOME} component={Home} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
