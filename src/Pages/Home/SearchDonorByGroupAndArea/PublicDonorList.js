import React from "react";
import { useParams } from "react-router-dom";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const PublicDonorList = () => {
  const { bloodGroup, donorArea } = useParams();

  const { isLoading, error, data } = useQuery(
    `${bloodGroup}+{${donorArea}}`,
    () =>
      fetch(
        `https://apis.bluespacejp.com/api/v1/donors/public/donorInfo?district=${donorArea}&group=${encodeURIComponent(
          bloodGroup
        )}`
      ).then((res) => res.json())
  );
  //  The encodeURIComponent() function encodes a URI by replacing each instance of certain characters by one, two, three, or four escape ...

  console.log(data);

  return (
    <div>
      <h1>{bloodGroup}</h1>
      <h1>{donorArea}</h1>
    </div>
  );
};

export default PublicDonorList;
