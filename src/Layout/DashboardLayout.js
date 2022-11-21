import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import { useAdmin } from '../hooks/useAdmin';
import Navbar from '../Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    
    const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile container mx-auto">
            <input id="appointment-modal" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                        <Outlet></Outlet>
                  
                
                </div> 
                <div className="drawer-side">
                    <label htmlFor="appointment-modal" className="drawer-overlay"></label> 
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                   
                    <li><Link to="/dashboard">My Appoinments</Link></li>
                        {
                            isAdmin && <>
                                <li><Link to="/dashboard/users">Users</Link></li>
                                <li><Link to="/dashboard/adddoctor">Add Doctor</Link></li>
                                <li><Link to="/dashboard/managedoctor">Manage Doctor</Link></li>
                            </>
                        }
                    </ul>
                
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;