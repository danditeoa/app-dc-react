import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Orders from "./components/Orders/Orders";
import { OrderDetails } from "./components/Orders/components/OrderDetails/OrderDetails";
import Home from "./components/Home/Home";
import "./App.scss";

export default function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/order-detais">OrderDetails</Link>
            </li>
            <li>
              <Link to="/orders">Orders</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/order-details" component={OrderDetails} />
            <Route path="/orders" component={Orders} />
          {/* <Route path="/order-detais">
            <OrderDetails />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/">
            <Home />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}
