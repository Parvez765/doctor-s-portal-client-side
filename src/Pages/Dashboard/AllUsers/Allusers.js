import React, { useEffect, useState } from 'react';

const Allusers = () => {

    const [users, setUsers] = useState([])
    // console.log(users)

    // Delete User State
    const[userDelete, setUserDelete] = useState([])
  

    const fetchUser = () => {
        fetch(`http://localhost:5000/dashboard/users`)
        .then(res => res.json())
        .then(data => setUsers(data))
    }

    

    useEffect(() => {
       fetchUser()
        
        
    }, [])


    

    const handleUpdate = id => {
        fetch(`http://localhost:5000/dashboard/users/${id}`, {
            method: "PUT",
            headers: {
                authorization : `bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    alert("User Updated To Admin")
                    fetchUser()
                    
                }
            })
        
    }

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/dashboard/users/${id}`, {
            method: "DELETE",
            headers: {
                authorization : `bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert("User Deleted Successfully")
                    fetchUser()
                }
            })
        
    }

    return (
        <div>
            <h2 className='text-3xl font-bold'>All Users</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                   
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    
                    {
                        users?.map((user, i) => <>
                                <tr>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user?.role !== "admin" ? <button onClick={()=> handleUpdate(user?._id)} className='btn btn-xs btn-primary'>Admin</button> : "User Added To Admin"}  </td>
                                <td><button onClick={()=> handleDelete(user?._id)} className='btn btn-xs btn-warning'>Delete</button></td>
                                </tr>
                            </>)
                    }
                 
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allusers;