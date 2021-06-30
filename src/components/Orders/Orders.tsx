import { useQuery } from "@apollo/client";
import React from "react";
import { GET_ORDERS } from "../../queries/Orders";
import "./orders.scss";

function Orders() {
  const { loading, error, data } = useQuery(GET_ORDERS);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>`Error!`</div>;
  }
  return (
    <div>
      <select name="orders">
        {data.orders.customer.map((orders: any) => (
          <option key={orders.customer._id} value={orders.customer.name}>
            {orders.customer.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Orders;
