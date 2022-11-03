import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import RequestDetails from "../RequestDetails/RequestDetails";
import { useNavigate } from "react-router-dom";

const MatchBooldRequest = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const url = `http://localhost:5000/api/v1/donors/${user?.email}`;

  const { isLoading, data, refetch } = useQuery(`${user?.email}`, () =>
    fetch(url).then((res) => res.json())
  );
  console.log(data);

  //encodeURIComponent('test+')

  const urlquery = `http://localhost:5000/api/v1/bloodRequest?group=${encodeURIComponent(
    data?.group
  )}&district=${data?.district}`;

  // console.log(urlquery);

  const {
    isLoading: loadingQuery,
    data: requests,
    refetch: reload,
  } = useQuery(`requets`, () => fetch(urlquery).then((res) => res.json()));

  if (loading || isLoading || loadingQuery) {
    return <Loading></Loading>;
  }

  // console.log(data);

  // console.log(requests);

  if (!data) {
    navigate("/profile");
  }

  return (
    <>
      {requests?.length === 0 && (
        <div>
          <h1 className="text-center text-semibold text-red-600">
            No Blood Request Found
          </h1>
        </div>
      )}

      {!data && (
        <div>
          <h1 className="text-center text-semibold text-red-600">
            Please update your Profile
          </h1>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-2">
        {requests?.map((request, index) => (
          <RequestDetails request={request} key={index}></RequestDetails>
        ))}
      </div>
    </>
  );
};

export default MatchBooldRequest;
