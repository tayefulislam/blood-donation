import { useQuery } from "react-query";

const useManageUsers = (email, search) => {
  console.log(email);
  const url = `${process.env.REACT_APP_apiHostLink}/api/v1/donors/admin/users?email=${email}&search=${search}`;

  const { isLoading, data, refetch } = useQuery("recent-requests", () =>
    fetch(url).then((res) => res.json())
  );
  return { data, isLoading, refetch };
};

export default useManageUsers;
