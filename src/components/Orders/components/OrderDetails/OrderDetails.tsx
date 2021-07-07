import React from 'react';
import {RouteComponentProps} from 'react-router'
import "./order-details.scss";

export const OrderDetails = ({location}: RouteComponentProps<{}, {}>) => {
  const data = location.state;

  return (
    <div>
      {JSON.stringify(data) }
    </div>
  )
}
