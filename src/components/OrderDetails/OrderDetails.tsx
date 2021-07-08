import React from "react";
import { RouteComponentProps } from "react-router";
import BackButton from "../BackButton/BackButton";
import "./order-details.scss";
import { Order } from "./types/Order";

export const OrderDetails = ({
  location,
}: RouteComponentProps<{}, {}, Order>) => {
  const data = location.state;
  const {
    externalReference,
    store,
    customer,
    address,
    reference,
    amount,
    deliveryFee,
    payments,
    items,
  } = data;

  console.log("DATA", data);

  return (
    <div className="card">
      <BackButton />
      <div className="content">
        <div>
          <p><b>Store:</b> {store} </p>
          <p><b>Customer:</b> {customer.name}</p>
          {items && items.map((item) => (
          <p><b>Items:</b> {item.name } <b>Number:</b> {item.quantity } <b>Value:</b> {item.amount }</p>
          ))}
          <p><b>Reference:</b> {reference}</p>
          <p><b>Delivery Fee:</b> {deliveryFee}</p>
          <p><b>Amount:</b> {amount}</p>
        </div>

        <div>
          <div><b>Payment methods:</b>
            <ul>
              <li>
              CREDIT
              </li>
              <li>
              DEBIT
              </li>
              <li>
              ONLINE
              </li>
              </ul> 
          </div>
          {payments && payments.map((payment) => (
          <p><b>Payment:</b> {payment.method } <b>Value:</b> {payment.amount }</p>
          ))}
        </div>
      </div>
    </div>
  );
};
