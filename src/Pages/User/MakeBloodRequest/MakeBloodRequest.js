import React from 'react';
import { format, parseISO } from 'date-fns';


const MakeBloodRequest = () => {


    const handleRequest = (event) => {

        event.preventDefault()
        // convet time


        const getTime = event?.target?.time?.value;
        const timeString = getTime + ':00'

        const time = new Date('1970-01-01T' + timeString + 'Z')
            .toLocaleTimeString('en-US',
                { timeZone: 'UTC', hour12: true, hour: 'numeric', minute: 'numeric' }
            );

        // comvert date

        const getDate = parseISO(event.target.date.value);

        const stringDate = format(getDate || new Date(), 'PP')

        console.log(stringDate)

        const patient = event.target.patient.value;
        const medical = event.target.medical.value;
        const number = event.target.number.value;
        const unit = event.target.unit.value;
        const group = event.target.group.value;


        const type = event.target.type.value;
        const district = event.target.district.value;
        const area = event.target.area.value;

        const bloodRequest = { patient, medical, number, unit, group, date: stringDate, time: time, type, district, area }

        console.log(bloodRequest)

    }
    return (
        <div className='flex justify-center items-center'>

            <div className='card w-96'>

                <h1 className='text-center text-2xl font-bold'>Make Blood Request</h1>

                <div className='card-body'>


                    <form onSubmit={handleRequest} >

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Patient Name :</span>

                            </label>
                            <input type="text" required placeholder="Patient Name" name='patient' class="input input-bordered input-error w-full max-w-xs" />
                            <label class="label">

                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Medical Name:</span>

                            </label>
                            <input type="text" required placeholder="Medical Name" name='medical' class="input input-bordered input-error w-full max-w-xs" />
                            <label class="label">

                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Phone Number:</span>

                            </label>
                            <input type="number" required placeholder="Phone Number" name='number' class="input input-bordered input-error w-full max-w-xs" />
                            <label class="label">

                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Units/Blood Bag?</span>

                            </label>
                            <input type="number" required placeholder="Units/Blood Bag" name='unit' class="input input-bordered input-error w-full max-w-xs" />
                            <label class="label">

                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Blood Group Required :</span>

                            </label>

                            <select name='group' required class="select select-error w-full max-w-xs">
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
                            <input type="date" required placeholder="Blood Donation Date " name='date' class="input input-bordered input-error w-full max-w-xs" />
                            <label class="label">

                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Blood Donation Time :</span>

                            </label>
                            <input type="time" required placeholder="Blood Donation Time" name='time' class="input input-bordered input-error w-full max-w-xs" />
                            <label class="label">

                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Requirement :</span>

                            </label>
                            <select name='type' class="select select-error w-full max-w-xs">

                                <option value='blood'>Blood</option>
                                <option value='platelets'>Platelets</option>
                                <option value='plasma'>Plasma</option>


                            </select>


                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">District * :</span>

                            </label>


                            <select name='district' required class="select select-error w-full max-w-xs">

                                <option value='Dhaka'>Dhaka</option>
                                <option value='Brahmanbaria'>Brahmanbaria</option>



                            </select>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Area :</span>

                            </label>
                            <textarea type="text" required placeholder="Area" name='area' class="input input-bordered input-error w-full max-w-xs" />
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

export default MakeBloodRequest;