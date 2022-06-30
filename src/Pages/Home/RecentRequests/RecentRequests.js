import React from 'react';
import { useQuery } from 'react-query';

const RecentRequests = () => {

    const url = `http://localhost:5000/allbloodrequests`;


    const { isLoading, data } = useQuery('recent-requests', () => fetch(url).then(res => res.json()))




    return (
        <div>






        </div>
    );
};

export default RecentRequests;