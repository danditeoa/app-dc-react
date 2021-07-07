import React from "react";
import { GET_ORDERS } from "../../../../Graphql/Orders";
import { useQuery } from "@apollo/client";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableFooter from "@material-ui/core/TableFooter";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { OrderDetailsModal } from "../OrderDetailsModal/OrderDetailsModal";

function OrdersTable() {
  const { loading, error, data } = useQuery(GET_ORDERS);
  const [orderDetailsModalIsOpen, setOrderDetailsModalIsOpen] = React.useState(false)

  console.log(data);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error!</div>;
  }

  const openDetails = () => {
    setOrderDetailsModalIsOpen(true);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          {data &&
            data.orders.map((order: any) => (
              <TableRow key={order.id} onClick={openDetails}>
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
        <TableFooter>
          <TableRow>PAGINADOR VAI AQUI</TableRow>
        </TableFooter>
      </Table>
      <OrderDetailsModal
        modalIsOpen={orderDetailsModalIsOpen}
        setModalIsOpen={setOrderDetailsModalIsOpen}
        data={order}
      />
    </TableContainer>
  );
}

export default OrdersTable;
