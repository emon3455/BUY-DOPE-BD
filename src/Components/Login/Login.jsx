import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../Provider/Provider';

const Login = () => {

    const [error , setError] = useState("");
    const {logInUser} = useContext(AuthContext);

    const handleLogin =(e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        setError("");
        logInUser(email,password)
        .then(res=>{
            
            const logedUser = res.user;
            console.log(logedUser);
            toast("Log in Successfull");
            e.target.reset();


        })
        .catch(er=>{
            setError(er.message);
        })

    }

    return (
        <div className="flex justify-center mt-20 lg:mt-28">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
                    <h2 className='text-2xl lg:text-3xl text-center p-2 font-semibold text-sky-500'>
                        Please Login !!
                    </h2>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6 space-y-2 text-center">
                        <input type="submit" className='btn btn-primary' value="Login" />
                            <p>
                                New To Buydope ? <Link to="/register" className='text-sky-600'>Click To Register</Link>
                            </p>
                            <p className='text-red-600'>
                                {error}
                            </p>
                        </div>
                    </form>
            </div>
        </div>
    );
};

export default Login;