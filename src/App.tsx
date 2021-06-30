import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Orders from "./components/Orders/Orders";
import OrderDetaisl from "./components/OrderDetaisl/OrderDetails";
import Home from "./components/Home/Home";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/order-detaisl">OrderDetaisl</Link>
            </li>
            <li>
              <Link to="/orders">Orders</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/order-detaisl">
            <OrderDetaisl />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
