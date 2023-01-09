import React from "react";
import usePost from "../../query_hooks/usePost";
import { useParams } from "react-router-dom";

function CardPost() {
  const { id } = useParams();
  const { status, data, error, isFetching } = usePost(id);

  console.log(data);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An error occurred: {error.message}</p>;
  }


  return (
    <div>
      <div>Detail id : {id} </div>
      <div>
        <h3>{data.description}</h3>
        <h3>{data.alt_description}</h3>
        <h3>{data.user.first_name}</h3>
      </div>
    </div>
  );
}

export default CardPost;
