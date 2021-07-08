import React from 'react';
import {RouteComponentProps} from 'react-router'
import BackButton from '../../../BackButton/BackButton';
import "./order-details.scss";

export const OrderDetails = ({location}: RouteComponentProps<{}, {}>) => {
  const data = location.state;
  console.log('DATA', data)

  return (
    <div className="container">
      <BackButton />
     {data.amount}
    </div>
  )
}
