import React from 'react'
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'

const SignUp = () => {
    return (
        <div className="sign-up-main mx-auto">
            <h2 className="text-center mb-5 sign-up-text">Sign Up</h2>
            <div class="mb-3 row">
                <div className='col-lg-5 col-md-12 mr-auto'>
                    <label class="form-label">First Name</label>
                    <input type="text" class="form-control" placeholder="Enter First Name" />
                </div>
                <div className='col-lg-6 col-md-12 ml-auto'>
                    <label class="form-label">Last Name</label>
                    <input type="text" class="form-control" placeholder="Enter Last Name" />
                </div>
            </div>
            <div class="mb-3">
                <label class="form-label">Email address</label>
                <input type="email" class="form-control" placeholder="Enter Email" />
            </div>
            <div class="mb-3">
                <label class="form-label">Password</label>
                <input type="password" class="form-control" placeholder="Enter Password" />
            </div>
            {/* <Link className="signup-button" to='/login'> */}
                <Button className="mt-4" variant="outlined" color="primary">
                    SignUp
                </Button>
            {/* </Link> */}
            <p className='mt-3'>
                Already have an account? <Link to='/login'>Login</Link>
            </p>
        </div>
    )
}

export default SignUp
