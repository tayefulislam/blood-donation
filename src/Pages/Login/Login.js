import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate, Link } from 'react-router-dom';
import auth from '../../firebase.init';


const Login = () => {




    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);








    const handleLogin = (event) => {
        event.preventDefault()

        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(email, password);



    }

    const navigate = useNavigate()



    if (user) {

        console.log(user)

        navigate('/')
    }


    return (
        <div className='flex justify-center items-center'>

            <div className='card w-96'>

                <h1 className='text-center text-2xl font-bold'>Login</h1>

                <div className='card-body'>


                    <form onSubmit={handleLogin} >


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
                            <input className='btn' type="submit" value="Login" />
                        </div>

                    </form>


                    <div className='text-center font-semibold'>
                        <p>Became A Donor : <Link className='text-red-400' to='/register'>Register</Link></p>
                    </div>

                </div>


            </div>



        </div>
    );
};

export default Login;