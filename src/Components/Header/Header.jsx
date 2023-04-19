import React, { useContext, useState } from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';
import { AuthContext } from '../../Provider/Provider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {

    const {user , logOut} = useContext(AuthContext);

    const handleLogout =()=>{
        logOut()
        .then(res=>{
            toast("log out Done!!")
        })
        .catch(er=>{
            console.log(er.message);
        })
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><ActiveLink to="/">Home</ActiveLink></li>
                        <li><ActiveLink to="/about">About</ActiveLink></li>
                        <li><ActiveLink to="/login">Login</ActiveLink></li>
                        <li><ActiveLink to="/register">Register</ActiveLink></li>
                        <li><ActiveLink to="/orderdProduct">Orderd Product</ActiveLink></li>
                    </ul>
                </div>
                <a className="p-1 normal-case text-xl">Buy Dope BD</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                        <li><ActiveLink to="/">Home</ActiveLink></li>
                        <li><ActiveLink to="/about">About</ActiveLink></li>
                        <li><ActiveLink to="/login">Login</ActiveLink></li>
                        <li><ActiveLink to="/register">Register</ActiveLink></li>
                        <li><ActiveLink to="/orderdProduct">Orderd Product</ActiveLink></li>
                </ul>
                </div>
                <div className="navbar-end space-x-2">
                    <p>
                         {user?.displayName}
                    </p>
                    <div className=" dropdown dropdown-left">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                            <img src={user &&  user.photoURL || "https://i0.wp.com/digitalhealthskills.com/wp-content/uploads/2022/11/3da39-no-user-image-icon-27.png?fit=500%2C500&ssl=1"} />
                            </div>
                            
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li onClick={handleLogout}><a>Logout</a></li>
                        </ul>
                    </div>
                </div>

      </div>
    );
};

export default Header;