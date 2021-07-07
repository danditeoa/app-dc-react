
import { gql } from "@apollo/client";

export const CREATE_ODER = gql`
  mutation createOrder(input: {
      
      store: DPIZZA
      externalReference: "126",
      amount: 89840,
      deliveryFee: 10300,
      customer: {
          name: "JUAREZ"
      },
      address: {
          number: "1234",
          neighborhood: "Vila da Laranja",
          complement: "Sala 16",
          city: "Laranjeiras",
          state: "PP",
          street: "R. teste"
      },
      items: [
          {
              name: "Esfiha",
              amount: 4990,
              quantity: 10
              note: null
          },
      ],
      payments: [
          {
              method: CREDIT,
              amount: 8980
          }
      ]
    }) {
      order {
        _id
        reference
        
      }
    }
  }
`;
