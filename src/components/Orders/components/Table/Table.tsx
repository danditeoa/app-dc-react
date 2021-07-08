import React from "react";
import { GET_ORDERS } from "../../../../Graphql/Orders";
import { useQuery } from "@apollo/client";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useHistory } from "react-router-dom";

function OrdersTable() {
  const { loading, error, data } = useQuery(GET_ORDERS);
  const history = useHistory();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error!</div>;
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          {data &&
            data.orders.map((order: any) => (
              <TableRow className="cursor" key={order.customer._id} onClick={() => history.push({
                pathname: '/order-details',
                state: order 
              })}>
                <TableCell component="th" scope="row">
                  {order.store}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {order.externalReference}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {order.customer.name}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default OrdersTable;
