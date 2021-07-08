import { gql } from "@apollo/client";

export const GET_ORDERS = gql`
  query getAllOrders {
    orders {
      externalReference
      store

      customer {
        _id
        name
      }
      address {
        number
        neighborhood
        complement
        city
        state
        street
      }
      reference
      amount
      deliveryFee

      payments {
        method
        amount
      }
      items {
        name
        quantity
        amount
      }
    }
  }
`;
