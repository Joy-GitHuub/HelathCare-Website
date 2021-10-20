import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const { signInUsingGoogle } = useAuth()
    return (
        <div >
            {/* Register From */}
            <h3 className='text-center mb-5'>Register Form</h3>
            <div className='login-from '>

                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 form-check">

                        <p>Already have an account? <Link to='/login'>Log-in</Link></p>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                    <br />
                    <button onClick={signInUsingGoogle} type="button" className="btn btn-outline-success my-5 mx-auto">Google Sign-in</button>
                </form>
            </div>

            <div>


            </div>
        </div>
    );
};

export default Register;