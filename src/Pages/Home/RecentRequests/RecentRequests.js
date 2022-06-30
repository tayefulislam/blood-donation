import React from 'react';
import { useQuery } from 'react-query';
import useRecentRequests from '../../../hooks/useRecentRequests/useRecentRequests';
import RequestDetails from '../../Donors/RequestDetails/RequestDetails';
import Loading from '../../Shared/Loading/Loading';

const RecentRequests = () => {


    const { data, isLoading } = useRecentRequests();


    if (isLoading) {
        return <Loading></Loading>
    }




    console.log(data)



    return (
        <div>


            <h1 className='text-center text-2xl font-bold my-4'>Recent Requests</h1>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-2'>

                {

                    data?.map((request, index) => <RequestDetails

                        request={request}
                        key={index}

                    ></RequestDetails>)


                }




            </div>






        </div>
    );
};

export default RecentRequests;