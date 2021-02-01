import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Destinations from "./Components/Destinations";
import CreateDestination from "./Components/Destinations/CreateDestination";
import DestinationDetails from "./Components/Destinations/DestinationDetails";
import EditDestination from "./Components/Destinations/EditDestination";
import Home from "./Components/Home";
import Hotels from "./Components/Hotels";
import CreateHotel from "./Components/Hotels/CreateHotel";
import EditHotel from "./Components/Hotels/EditHotel";
import HotelDetails from "./Components/Hotels/HotelDetails";
import {
  HOME,
  HOTELS,
  CREATEHOTEL,
  HOTELDETAILS,
  EDITHOTEL,
  DESTINATIONS,
  DESTINATIONDETAILS,
  CREATEDESTINATION,
  EDITDESTINATION,
} from "./routes";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={HOME} component={Home} exact />
        <Route path={HOTELS} component={Hotels} exact />
        <Route path={CREATEHOTEL} component={CreateHotel} />
        <Route path={EDITHOTEL} component={EditHotel} />
        <Route path={HOTELDETAILS} component={HotelDetails} />
        <Route path={DESTINATIONS} component={Destinations} exact />
        <Route path={CREATEDESTINATION} component={CreateDestination} />
        <Route path={EDITDESTINATION} component={EditDestination} />
        <Route path={DESTINATIONDETAILS} component={DestinationDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
