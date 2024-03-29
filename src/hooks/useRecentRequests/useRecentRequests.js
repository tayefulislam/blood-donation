// import React from 'react';
import { useQuery } from "react-query";

const useRecentRequests = () => {
  const url = `https://blooddonationmvc.onrender.com/api/v1/bloodRequest`;

  const { isLoading, data } = useQuery("recent-requests", () =>
    fetch(url).then((res) => res.json())
  );

  // console.log(data)

  console.log(data);

  return { data, isLoading };
};

export default useRecentRequests;
