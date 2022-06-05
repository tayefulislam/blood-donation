import React from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';

import auth from '../../firebase.init'
const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const handleRegister = async (event) => {
        event.preventDefault()

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name })


        const user = { email }

        const url = `http://localhost:5000/createDonor`

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })




    }
    return (
        <div className='flex justify-center items-center'>

            <div className='card w-96'>

                <h1 className='text-center text-2xl font-bold'>Become A Donor</h1>

                <div className='card-body'>


                    <form onSubmit={handleRegister} >

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Your Name :</span>

                            </label>
                            <input type="text" required placeholder="Your Name" name='name' class="input input-bordered input-error w-full max-w-xs" />
                            <label class="label">

                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>

                            </label>
                            <input type="email" required placeholder="Email Address" name='email' class="input input-bordered input-error w-full max-w-xs" />
                            <label class="label">

                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Password</span>

                            </label>
                            <input type="password" required placeholder="Password" name='password' class="input input-bordered input-error w-full max-w-xs" />
                            <label class="label">

                            </label>
                        </div>


                        <div className='flex justify-center items-center'>
                            <input className='btn' type="submit" value="Submit" />
                        </div>

                    </form>

                </div>


            </div>



        </div>
    );
};

export default Register;