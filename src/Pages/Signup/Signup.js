import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import app from '../../firebase/firebase.config';

const Signup = () => {

    const navigate = useNavigate()
    const { createUser } = useContext(AuthContext)
    const [error, setError] = useState("")
    
    const handleSignUp = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value

        createUser(email, password)
            .then(result => {
                setError("")
                const user = result.user
                savedUser(name, email)
                console.log(user)
                if (user) {
                    alert("User Created Successfully")
                }
            })
            .catch(err => {
                setError(err)
                
        })
        
    }

    const savedUser = (name, email) => {
        const user = { name, email }
        fetch(`http://localhost:5000/dashboard/users`, {
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                getToken(email)
              
                
                
        })
    }

    const getToken = (email) => {
        fetch(`http://localhost:5000/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.accessToken) {
                    localStorage.setItem("accessToken", data.accessToken)
                    navigate("/")
            }
        })
    }
    

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                    <h1 className="text-5xl font-bold">Sign Up</h1>
                    
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp}>
                       <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                             
                            </div>
                            <div className="form-control mt-6">
                            <button className="btn btn-primary">Signup</button>
                                </div>
                                <p>Already Have An Account? Please <Link to="/login">Login</Link></p>
                            
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;