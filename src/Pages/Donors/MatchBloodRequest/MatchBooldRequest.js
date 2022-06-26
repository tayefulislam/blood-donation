import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';



const MatchBooldRequest = () => {

    const [user, loading, error] = useAuthState(auth);

    const url = `http://localhost:5000/profile/${user?.email}`

    const { isLoading, data, refetch } = useQuery(`${user?.email}`, () => fetch(url).then(res => res.json()))







    const urlquery = `http://localhost:5000/bloodreqests/${data?.group}?district=${data?.district}`

    console.log(urlquery)

    const { isLoading: loadingQuery, data: request, refetch: reload } = useQuery(`${user?.email}requets`, () => fetch(urlquery).then(res => res.json()))

    if (loading || isLoading) {
        return <Loading></Loading>
    }



    console.log(data)

    console.log(request)



    return (
        <div className='grid grid-cols-1 lg:grid-cols-3'>






        </div>
    );
};

export default MatchBooldRequest;