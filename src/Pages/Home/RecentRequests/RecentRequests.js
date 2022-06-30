import React from 'react';
import { useQuery } from 'react-query';
import useRecentRequests from '../../../hooks/useRecentRequests/useRecentRequests';

const RecentRequests = () => {


    const { data, isLoading } = useRecentRequests();

    console.log(data)



    return (
        <div>






        </div>
    );
};

export default RecentRequests;