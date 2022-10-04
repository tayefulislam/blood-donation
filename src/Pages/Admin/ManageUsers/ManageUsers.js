import React from 'react';
import { useQuery } from 'react-query';


const ManageUsers = () => {

    const usersUrl = `http://localhost:5000/admin/users`;
    const { isLoading, error, data } = useQuery('allusers', () => fetch(usersUrl).then(res => res.json()));

    console.log(data);








    return (
        <div class="overflow-x-auto w-full">
            <table class="table w-full">

                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" class="checkbox" />
                            </label>
                        </th>
                        <th>Name</th>
                        <th>Blood Group</th>
                        <th>Phone Number</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>

                    {data.map(user => <tr>
                        <th>
                            <label>
                                <input type="checkbox" class="checkbox" />
                            </label>
                        </th>
                        <td>
                            <div class="flex items-center space-x-3">

                                <div>
                                    <div class="font-bold">{user?.name}</div>
                                    <div class="text-sm opacity-50">{user?.district}</div>
                                </div>
                            </div>
                        </td>

                        <td>
                            <div class="font-bold">{user?.group}</div>
                        </td>
                        <td>
                            <div class="font-bold">{user?.number}</div>
                        </td>


                        <td>
                            Zemlak, Daniel and Leannon <br></br>

                            <span class="badge badge-ghost badge-sm">Desktop Support Technician</span>
                        </td>
                        <td>Purple</td>
                        <th>
                            <button class="btn btn-ghost btn-xs">details</button>
                        </th>
                    </tr>)}


                </tbody>


            </table>
        </div>
    );
};

export default ManageUsers;