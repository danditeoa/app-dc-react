import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Orders from "./components/Orders/Orders";
import { OrderDetails } from "./components/Orders/components/OrderDetails/OrderDetails";
import Home from "./components/Home/Home";
import "./App.scss";


export default function App() {
  return (
    <Router>
      <div>
        <nav>
            dfsdfds
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
        <div className="app">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/order-details" component={OrderDetails} />
            <Route path="/orders" component={Orders} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}
