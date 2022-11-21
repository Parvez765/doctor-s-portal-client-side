import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const MyAppoinment = () => {
    const [bookings, setBookings] = useState([])
    const { user } = useContext(AuthContext)
    // console.log(user)
   

    useEffect(() => {
        fetch(`http://localhost:5000/bookings?email=${user?.email}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                 setBookings(data)
               
            })
        
    }, [user?.email])


    return (
        <div>
            <h2 className='text-3xl font-bold mb-5'>My Appoinments</h2>
            <div className="overflow-x-auto">
            <div className="overflow-x-auto">
            <table className="table w-full">
              
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Treatment</th>
                    <th>Appoinment Date</th>
                    <th>Slot</th>
                </tr>
                </thead>
                <tbody>
               
                {
                   bookings?.map((booking, i) => <>
                           <tr>
                           <th>{i+1}</th>
                            <td>{booking.patientName}</td>
                           <td>{booking.treatmentName}</td>
                           <td>{booking.appoinmentDate}</td>
                           <td>{booking.slot}</td>
                        </tr>      
                    </>)            
                }
                
                </tbody>
            </table>
            </div>
                        
            </div>
        </div>
    );
};

export default MyAppoinment;