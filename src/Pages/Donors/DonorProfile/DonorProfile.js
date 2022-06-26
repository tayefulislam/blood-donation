import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { format, parseISO } from 'date-fns';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';


const DonorProfile = () => {


    const [user, loading, error] = useAuthState(auth);

    console.log(user)
    const url = `http://localhost:5000/profile/${user?.email}`

    const { isLoading, data, refetch } = useQuery(`${user?.email}`, () => fetch(url).then(res => res.json()))




    if (loading || isLoading) {
        return <Loading></Loading>
    }

    console.log(data)

    const updateProfile = (event) => {

        event.preventDefault()

        // comvert date

        // const getDate = parseISO(event.target.date.value);

        // const stringDate = format(getDate || new Date(), 'PP')

        // console.log(stringDate)

        const name = event.target.name.value;
        const email = event.target.email.value;
        const number = event.target.number.value;

        const group = event.target.group.value;

        const district = event.target.district.value;
        const area = event.target.area.value;


        // new blood request 
        // const updatedProfile = { name, email, number, group, date: stringDate, district, area }
        const updatedProfile = { name, email, number, group, district, area }

        console.log(updatedProfile)

        const url = `http://localhost:5000/updateProfile`

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedProfile)
        })

            .then(res => res.json())
            .then(data => {
                console.log(data)

                if (data?.modifiedCount > 0) {
                    refetch()
                }
            })


    }

    return (
        <div className='flex justify-center items-center'>

            <div className='card w-96'>

                <h1 className='text-center text-2xl font-bold'>Update Profile</h1>

                <div className='card-body'>


                    <form onSubmit={updateProfile} >

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Name :</span>

                            </label>
                            <input type="text" required
                                defaultValue={user?.displayName}
                                disabled
                                placeholder="Name" name='name' class="input input-bordered input-error w-full max-w-xs" />
                            <label class="label">

                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email:</span>

                            </label>
                            <input type="text" required

                                defaultValue={user?.email}
                                disabled
                                placeholder="Email" name='email' class="input input-bordered input-error w-full max-w-xs" />
                            <label class="label">

                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Phone Number:</span>

                            </label>
                            <input type="number" required
                                defaultValue={data?.number}
                                placeholder="Phone Number" name='number' class="input input-bordered input-error w-full max-w-xs" />
                            <label class="label">

                            </label>
                        </div>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Blood Group:</span>

                            </label>



                            {

                                !data?.group && <select name='group' required class="select select-error w-full max-w-xs">
                                    <option disabled selected>Select Blood Group</option>
                                    <option value='A+'>A+ (A POSITIVE)</option>
                                    <option value='A-'>A- (A NEGATIVE)</option>
                                    <option value='B+'>B+ (B POSITIVE)</option>
                                    <option value='B-'>B- (B NEGATIVE)</option>

                                    <option value='AB+'>AB+ (AB POSITIVE)</option>
                                    <option value='AB-'>AB- (AB NEGATIVE)</option>
                                    <option value='O+'>O+ (O POSITIVE)</option>
                                    <option value='O-'>O- (O NEGATIVE)</option>

                                </select>

                            }


                            {
                                data?.group && <input type="text" name='group'
                                    disabled

                                    defaultValue={data?.group}

                                    class="input input-bordered input-error w-full max-w-xs" />

                            }

                            <label class="label">

                            </label>
                        </div>


                        {/* <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text"> Last Blood Donation Date :</span>

                            </label>
                            <input type="date" required placeholder="Blood Donation Date " name='date' class="input input-bordered input-error w-full max-w-xs" />
                            <label class="label">

                            </label>
                        </div> */}


                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">District * :</span>

                            </label>


                            <select name='district' required class="select select-error w-full max-w-xs">

                                <option value='Dhaka'>Dhaka</option>
                                <option value='Brahmanbaria' selected={data?.district === "Brahmanbaria"}>Brahmanbaria</option>



                            </select>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Area :</span>

                            </label>
                            <textarea type="text" required
                                defaultValue={data?.area}
                                placeholder="Area" name='area' class="input input-bordered input-error w-full max-w-xs" />
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

export default DonorProfile;