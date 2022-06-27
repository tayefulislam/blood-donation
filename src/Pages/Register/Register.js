import React from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate, Link } from 'react-router-dom';


import auth from '../../firebase.init'
const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    // navigate 

    const navigate = useNavigate()

    const handleRegister = async (event) => {
        event.preventDefault()

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name })


        const user = { email }

        const url = `https://blooming-sea-92425.herokuapp.com/createDonor`

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

                if (data?.insertedId) {


                    navigate('/profile')



                }
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
                            <input className='btn' type="submit" value="Signup" />
                        </div>

                    </form>


                    <div className='text-center font-semibold'>
                        <p>Already A Donor : <Link className='text-red-400' to='/login'>Login</Link></p>
                    </div>

                </div>


            </div>



        </div>
    );
};

export default Register;