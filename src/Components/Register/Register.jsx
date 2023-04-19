import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

    return (
        <div className="flex justify-center mt-8 md:mt-12">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
                    <h2 className='text-2xl lg:text-3xl text-center p-2 font-semibold text-sky-500'>
                        Please Register !!
                    </h2>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name='name' className="input input-bordered" />
                        </div>

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
                        </div>
                        <div className="form-control mt-6 space-y-2 text-center">
                            <button className="btn btn-primary">Login</button>
                            <p>
                                Already have an Account ? <Link to="/login" className='text-sky-600'>Click To Login</Link>
                            </p>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Register;