import { useQuery } from "react-query";

const useManageUsers = () => {
  const url = `https://blooddonationmvc.onrender.com/api/v1/donors/admin/users`;

  const { isLoading, data, refetch } = useQuery("recent-requests", () =>
    fetch(url).then((res) => res.json())
  );
  return { data, isLoading, refetch };
};

export default useManageUsers;
