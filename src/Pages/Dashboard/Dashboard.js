import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';

import { signOut } from 'firebase/auth'
import auth from '../../firebase.init';


const Dashboard = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    return (
        <div>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-2'>



                <div onClick={() => navigate('/bloodRequests')} class="card w-full bg-red-500 shadow-xl text-white">
                    <figure class="px-10 pt-10">
                        <i class="fa-solid fa-users-between-lines"></i>
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Blood Requests</h2>

                    </div>
                </div>


                <div onClick={() => navigate('/profile')} class="card w-full bg-red-500 shadow-xl text-white">
                    <figure class="px-10 pt-10">
                        <i class="fa-solid fa-arrow-right-to-bracket"></i>
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Profile</h2>

                    </div>
                </div>



                <div onClick={() => signOut(auth)} class="card w-full bg-red-500 shadow-xl text-white">
                    <figure class="px-10 pt-10">
                        <i class="fa-solid fa-arrow-right-to-bracket"></i>
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Log Out</h2>

                    </div>
                </div>




            </div>




        </div>
    );
};

export default Dashboard;