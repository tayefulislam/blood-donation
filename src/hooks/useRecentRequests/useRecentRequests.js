import React from 'react';
import { useQuery } from 'react-query';

const useRecentRequests = () => {

    const url = `http://localhost:5000/allbloodrequests`;

    const { isLoading, data } = useQuery('recent-requests', () => fetch(url).then(res => res.json()))



    // console.log(data)

    return { data, isLoading }
};

export default useRecentRequests;