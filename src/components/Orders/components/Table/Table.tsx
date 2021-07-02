import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ORDERS } from "../../../../queries/Orders";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableFooter from "@material-ui/core/TableFooter";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

function OrdersTable() {
  const { loading, error, data } = useQuery(GET_ORDERS);
  console.log(data);
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
            data.orders.map((orders: any) => (
              <TableRow key={orders.name}>
                <TableCell component="th" scope="row">
                  {orders.store}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {orders.externalReference}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {orders.customer.name}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
        <TableFooter>
          <TableRow>PAGINADOR VAI AQUI</TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}

export default OrdersTable;
