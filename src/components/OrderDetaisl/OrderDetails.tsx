import React from "react";
import "./order-details.scss";
import { useQuery } from "@apollo/client";
import { GET_ORDER_DETAILS } from "../../queries/OrderDetails";

function OrderDetails() {
  const { loading, error, data } = useQuery(GET_ORDER_DETAILS);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>`Error! ${error.message}`</div>;
  }

  return (
    <select name="episode">
      {data.episodes.results.map((episode: any) => (
        <option key={episode.id} value={episode.name}>
          {episode.name}
        </option>
      ))}
    </select>
  );
}

export default OrderDetails;
