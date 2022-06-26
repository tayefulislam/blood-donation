import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';




const Header = () => {

    const [user, loading, error] = useAuthState(auth);


    const manu = <>

        <li><Link to='/makeRequests'>Blood Request</Link></li>
        <li><Link to='/bloodRequests'>Blood Requests (Donor)</Link></li>
        <li><Link to='/'>Item 3</Link></li>


    </>

    console.log(user)

    return (
        <div class="navbar bg-base-100">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {manu}
                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {manu}
                </ul>
            </div>
            <div class="navbar-end">
                {/* <a class="btn">Get started</a> */}

                {
                    user && <div class="dropdown dropdown-end">
                        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                            <div class="w-10 rounded-full">
                                <img src="https://api.lorem.space/image/face?hash=33791" />
                            </div>
                        </label>
                        <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <Link to='/profile' class="justify-between">
                                    Profile
                                    <span class="badge">New</span>
                                </Link>
                            </li>
                            <li><a>Settings</a></li>

                            {
                                user?.email && <li><a onClick={() => signOut(auth)}>Logout</a></li>
                            }

                        </ul>
                    </div>
                }

                {
                    !user && <Link className='text-xl font-semibold text-red-500 mx-1' to='/login'>Login</Link>
                }



            </div>
        </div>
    );
};

export default Header;