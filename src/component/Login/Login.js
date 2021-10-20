import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import './Login.css'

const Login = () => {
    const { signInUsingGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect)
            })
    }

    return (
        <>
            {/* Loging Section... */}
            <h3 className='text-center text-info'>Please Log-in </h3>
            <div className='login-from my-5'>
                <div>
                    <form>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3 form-check">

                            <p>Create New User <Link to='/register'>Account</Link></p>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>


                    <button onClick={handleGoogleLogin} type="button" className="btn btn-outline-success mt-5">Google Sign-in</button>

                </div>
            </div>
        </>
    );
};

export default Login;