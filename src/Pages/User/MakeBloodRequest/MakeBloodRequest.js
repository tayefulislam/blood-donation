import React from 'react';

const MakeBloodRequest = () => {
    return (
        <div className='flex justify-center items-center'>

            <div className='card w-96'>

                <h1 className='text-center text-2xl font-bold'>Make Blood Request</h1>

                <div className='card-body'>


                    <form >

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Patient Name :</span>

                            </label>
                            <input type="text" placeholder="Patient Name" name='patient' class="input input-bordered input-error w-full max-w-xs" />
                            <label class="label">

                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Medical Name:</span>

                            </label>
                            <input type="text" placeholder="Medical Name" name='medical' class="input input-bordered input-error w-full max-w-xs" />
                            <label class="label">

                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Phone Number:</span>

                            </label>
                            <input type="number" placeholder="Phone Number" name='number' class="input input-bordered input-error w-full max-w-xs" />
                            <label class="label">

                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Units/Blood Bag?</span>

                            </label>
                            <input type="text" placeholder="Units/Blood Bag" name='unit' class="input input-bordered input-error w-full max-w-xs" />
                            <label class="label">

                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Blood Group Required :</span>

                            </label>

                            <select name='group' class="select select-secondary w-full max-w-xs">
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

                            <label class="label">

                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Blood Donation Date :</span>

                            </label>
                            <input type="date" placeholder="Blood Donation Date " name='date' class="input input-bordered input-error w-full max-w-xs" />
                            <label class="label">

                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Blood Donation Time :</span>

                            </label>
                            <input type="time" placeholder="Blood Donation Time" name='time' class="input input-bordered input-error w-full max-w-xs" />
                            <label class="label">

                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Requirement :</span>

                            </label>
                            <select name='group' class="select select-secondary w-full max-w-xs">

                                <option value='blood'>Blood</option>
                                <option value='platelets'>Platelets</option>
                                <option value='plasma'>Plasma</option>


                            </select>


                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">District * :</span>

                            </label>


                            <select name='group' class="select select-secondary w-full max-w-xs">

                                <option value='Dhaka'>Dhaka</option>
                                <option value='Brahmanbaria'>Brahmanbaria</option>



                            </select>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Area :</span>

                            </label>
                            <textarea type="text" placeholder="Area" name='area' class="input input-bordered input-error w-full max-w-xs" />
                            <label class="label">

                            </label>
                        </div>

                        <div className='flex justify-center items-center'>
                            <input className='btn' type="button" value="Submit" />
                        </div>



                    </form>

                </div>


            </div>



        </div>
    );
};

export default MakeBloodRequest;