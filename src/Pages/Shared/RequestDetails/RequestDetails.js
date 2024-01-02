import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { useQuery } from "react-query";

const RequestDetails = () => {
  const params = useParams();
  // console.log(params?.reqId)

  const copyURL = () => {
    const link = window.location.href;
    // console.log(link)
    navigator.clipboard.writeText(link);
    toast.success("URL Copied to clipboard");
  };

  const url = `${process.env.REACT_APP_apiHostLink}/api/v1/bloodRequest/${params?.reqId}`;
  console.log(url);

  const { isLoading, data } = useQuery(`${params?.reqId + "request"}`, () =>
    fetch(url).then((res) => res.json())
  );

  console.log(data);

  return (
    <div className="flex flex-col justify-center items-center mx-2">
      <h1 className="text-center font-semibold text-xl">
        Blood Request Details
      </h1>

      <div className="mt-5">
        <div>
          <h1>Request Id : {data?._id}</h1>
          <h2>PATIENT Name: {data?.patient}</h2>
          <h1>Blood Group : {data?.group}</h1>
          <h1>Type: {data?.type}</h1>
          <h1>Date : {data?.date} </h1>
          <h1>Time : {data?.time}</h1>
          <h1 className="text-center font-semibold">Address</h1>
          <h1>Medical : {data?.medical}</h1>
          <h1>Number : {data?.number}</h1>
          <h1>Area : {data?.area}</h1>
          <h1>District : {data?.district}</h1>

          <div className="flex flex-col justify-center items-center mx-2">
            <button
              className="bg-red-500 text-white py-3 px-5 rounded-full"
              onClick={() => copyURL()}
            >
              Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestDetails;
