import React from "react";
import { useParams } from "react-router-dom";

const PublicDonorList = () => {
  const { bloodGroup, donorArea } = useParams();

  console.log(bloodGroup, donorArea);
  return (
    <div>
      <h1>{bloodGroup}</h1>
      <h1>{donorArea}</h1>
    </div>
  );
};

export default PublicDonorList;
