import React from 'react'
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom'

const SignUp = () => {
    return (
        <div className="sign-up-main mx-auto">
            <h2 className="text-center mb-5 sign-up-text">Sign Up</h2>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Username</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Username" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput2" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput2" placeholder="Enter Email" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput3" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleFormControlInput3" placeholder="Enter Password" />
            </div>
            <NavLink className="signup-button" to='/login'>
                <Button variant="outlined" color="primary">
                    SignUp
                </Button>
            </NavLink>
        </div>
    )
}

export default SignUp
