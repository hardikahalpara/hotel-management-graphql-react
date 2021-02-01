import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Hotels from "./Components/Hotels";
import CreateHotel from "./Components/Hotels/CreateHotel";
import EditHotel from "./Components/Hotels/EditHotel";
import HotelDetails from "./Components/Hotels/HotelDetails";
import { HOME, HOTELS, CREATEHOTEL, HOTELDETAILS, EDITHOTEL } from "./routes";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={HOME} component={Home} exact />
        <Route path={HOTELS} component={Hotels} exact />
        <Route path={CREATEHOTEL} component={CreateHotel} />
        <Route path={EDITHOTEL} component={EditHotel} />
        <Route path={HOTELDETAILS} component={HotelDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
