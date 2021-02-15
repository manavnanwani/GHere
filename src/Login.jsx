import React from 'react'
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom'

const Login = () => {
    return (
        <div className="login-main mx-auto">
            <h2 className="text-center mb-5">Login</h2>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Username</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Username" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput3" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleFormControlInput3" placeholder="Enter Password" />
            </div>
            <NavLink className="login-button" to='/games'>
                <Button variant="outlined" color="primary">
                    Login
                </Button>
            </NavLink>
        </div>
    )
}

export default Login
// box-shadow: 8px -9px 26px -5px rgba(252,252,252,0.75);
// -webkit-box-shadow: 8px -9px 26px -5px rgba(252,252,252,0.75);
// -moz-box-shadow: 8px -9px 26px -5px rgba(252,252,252,0.75);