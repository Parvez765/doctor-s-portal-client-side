import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Navbar = () => {
    const {userLogOut} = useContext(AuthContext)
    const handleLogOut = () => {
        userLogOut()
        localStorage.removeItem("accessToken")
    }

    const { user } = useContext(AuthContext)
   
    return (
        <div>
            <div className="navbar bg-base-100 container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to="/">Home</Link></li>
                        <li><a>About</a></li>
                        <li><Link to="/appoinment">Appoinment</Link></li>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                    </ul>
                    </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Doctor's Portal</a>
                </div>
                <div className="navbar-end hidden lg:flex">

                    

                    <ul className="menu menu-horizontal p-0">
                        {
                            user?.email && <li className='items-center text-primary'>Hi, {user?.email}</li>
                        }
                    <li><Link to="/">Home</Link></li>
                    <li><a>About</a></li>
                    <li><Link to="/appoinment">Appoinment</Link></li>
                   
                    {
                            user?.email ? <>
                                <li><Link to="/dashboard">Dashboard</Link></li>
                                <li><Link to="/login"><button onClick={handleLogOut} className='btn btn-outline'>Logout</button>
                                </Link></li>
                            
                            </> : <li><Link to="/login">Login</Link></li>  
                    }
                    </ul>
                </div>
            <label  htmlFor="appointment-modal" tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>

            </div>
        </div>
    );
};

export default Navbar;