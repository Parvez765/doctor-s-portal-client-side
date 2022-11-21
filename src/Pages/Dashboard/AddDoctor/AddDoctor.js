import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const AddDoctor = () => {
    const imgHostKey = process.env.REACT_APP_imgbb_key
    console.log(imgHostKey)
    const [appoinments, setAppoinments] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/appoinment`)
            .then(res => res.json())
        .then(data => setAppoinments(data))
    }, [])
    
    const handleAddDoctor = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const options = form.options.value
        const imageList = form.img.files
        const image = imageList[0]
        console.log(image)
        

        const formData = new FormData()
        formData.append("image", image)
        

        

        
        fetch(`https://api.imgbb.com/1/upload?key=${imgHostKey}`, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const doctorsProfile = {
                        name, email, options,
                        image: imgData.data.url
                    }
                    fetch(`http://localhost:5000/dashboard/adddoctors`, {
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                            authorization : `bearer ${localStorage.getItem("accessToken")}`
                        },
                        body: JSON.stringify(doctorsProfile)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                        })
                    
                }
        })
    }

    return (
        <div>
            <h2 className='text-3xl font-bold mt-12'>Please Add An Specialist</h2>
            <div className="hero mt-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    
                    <div className="card flex-shrink-0 w-full shadow-2xl">
                        <form onSubmit={handleAddDoctor}>
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                        <input type="text" name="name" placeholder="Enter Your Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                        <input type="email" name="email" placeholder="Enter Your Email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Specialist</span>
                                    </label>
                                    <select name="options" className="select select-bordered w-full max-w-xs">
                                        {
                                            appoinments.map(appoinment => <>
                                                <option value={appoinment.name}>{appoinment.name}</option>
                                            </>
                                            )            
                                        }
                                    </select>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image</span>
                                    </label>
                                    <input type="file" name="img" placeholder="Enter Your Image" className="input input-bordered" />
                                </div>







                                <div className="form-control mt-6">
                                <button className="btn btn-primary">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddDoctor;