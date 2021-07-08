import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Orders from "./components/Orders/Orders";
import { OrderDetails } from "./components/OrderDetails/OrderDetails";
import FastfoodIcon from '@material-ui/icons/Fastfood';
import "./App.scss";


export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <FastfoodIcon />
        </nav>
        <div className="app">
          <Switch>
            <Route path="/" component={Orders} exact />
            <Route path="/order-details" component={OrderDetails} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}
