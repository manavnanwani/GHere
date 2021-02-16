import React from 'react'
import img from './images/cards4.png'
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom'

const Home = () => {
    return (
        <div className="d-flex align-items-center">
          <div className="container-fluid cont">
            <div className="row">
                <div className="col-md-10 mx-auto">
                    <div className="row">
                        <div className="main col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <h1 className="GH">Gamble<span>Here</span></h1>
                            <h4 className="GH-text">Welcome to the HOME of GAMBLING!! <br /><br />Welcome to the HOME of GAMBLING!!Welcome to the HOME of GAMBLING!!Welcome to the HOME of GAMBLING!!</h4>
                            <NavLink className="go-to" to='/signup'>
                                <Button variant="outlined" color="primary" className='get-started'>
                                    Get Started
                                </Button>
                            </NavLink>
                        </div>
                        <div className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-2 d-flex justify-content-center">
                            <img src={img} className='img-fluid animated' alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    )
}

export default Home
