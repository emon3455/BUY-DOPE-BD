import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../Provider/Provider';

const Login = () => {

    const [error , setError] = useState("");
    const {logInUser,logWithGoogle} = useContext(AuthContext);

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

    const handleGoogleSignIn = () =>{
        logWithGoogle()
        .then(res=>{
            toast("login Successfull")
        })
        .catch(er=>{
            setError(er.message);
        })
    }

    return (
        <div className="flex justify-center mt-4 lg:mt-6">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mb-1">
                    <h2 className='text-2xl lg:text-3xl text-center p-2 font-semibold text-sky-500'>
                        Please Login !!
                    </h2>
                    <form onSubmit={handleLogin} className="card-body mb-0">
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
                                <Link to="/" className="label-text-alt link link-hover">Forgot password?</Link>
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

                    <div className="card space-y-2 p-4">
                        <button onClick={handleGoogleSignIn} className='btn bg-white text-black space-x-4 hover:text-white'>
                            <FaGoogle className='text-yellow-400 text-xl '/> <span>Login With Goggle</span>
                        </button>
                    </div>
                    
            </div>
        </div>
    );
};

export default Login;