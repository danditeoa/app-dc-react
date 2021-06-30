import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ORDERS } from "../../queries/Orders";
import "./orders.scss";

function Orders() {
  const { loading, error, data } = useQuery(GET_ORDERS);
  console.log(data);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error!</div>;
  }
  return (
    <div>
      <select name="orders">
        {data &&
          data.orders.map((orders: any) => (
            <option key={orders.store}>{orders.store}</option>
          ))}
      </select>
    </div>
  );
}

export default Orders;
