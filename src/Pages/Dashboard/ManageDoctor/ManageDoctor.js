import React, { useEffect, useState } from 'react';

const ManageDoctor = () => {

    const [doctorsList, setDoctorsList] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/dashboard/adddoctors`, {
            headers: {
                authorization : `bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => setDoctorsList(data))
        
    }, [])

    return (
        <div>
            <h2 className='text-3xl font-bold mb-10'>Doctor's List</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Profile</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialist</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctorsList.map((doctor, i) => <>
                                 <tr>
                                    <th>{i+ 1}</th>
                                    <td><img className='w-20 rounded-full' src={doctor.image} alt="" /></td>
                                    <td>{doctor.name}</td>
                                    <td>{doctor.email}</td>
                                    <td>{doctor.options}</td>
                                </tr>
                            </>)
                       }
                    </tbody>
                </table>
                </div>
        </div>
    );
};

export default ManageDoctor;