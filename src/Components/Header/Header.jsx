import React, { useContext, useState } from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';
import { AuthContext } from '../../Provider/Provider';

const Header = () => {

    const [open, setOpen] = useState(false);
    const {user} = useContext(AuthContext);

    return (
       <header className='bg-gray-900 text-white text-xl z-20'>

             <nav className='container mx-auto bg-slate-900 text-white p-4 flex justify-between'>

                <div className="md:w-1/3 flex items-center gap-4">

                    <div onClick={()=> setOpen(!open)} className="md:hidden">
                        <span>
                            {
                                open===true ? 
                                <i className="fa-solid fa-xmark fa-xl"></i>
                                : 
                                <i className="fa-solid fa-bars fa-xl"></i>
                            }
                        </span>
                    </div>

                    <h2 className='text-3xl text-violet-400 font-serif font-semibold'>Buy Dope BD </h2>

                </div>

                <ul className={`bg-slate-900 w-full md:w-2/3 p-1 text-white flex flex-col md:flex-row md:justify-around text-xl
                 absolute md:static left-0 ${open ? 'top-14' : '-top-36'}`}>
                    <ActiveLink to="/">Home</ActiveLink>
                    <ActiveLink to="/about">About</ActiveLink>
                    <ActiveLink to="/login">Login</ActiveLink>
                    <ActiveLink to="/register">Register</ActiveLink>
                    <ActiveLink to="/orderdProduct">Orderd Product</ActiveLink>
                </ul>

            </nav>
       </header>
    );
};

export default Header;