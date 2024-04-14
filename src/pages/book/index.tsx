import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function BookDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  if (!id) {
    navigate("/reading");
  }

  return <div>this is book detail page</div>;
}

export default BookDetail;
