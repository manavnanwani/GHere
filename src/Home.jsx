import React from 'react'
import img from './images/cards4.png'
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div className="d-flex align-items-center">
          <div className="container-fluid cont-home">
            <div className="row">
                <div className="col-md-10 mx-auto">
                <h1 className="GH">Gamble<span>Here</span></h1>
                    <div className="row">
                        <div className="main col-md-6 pt-5 pt-lg-0 order-2 order-md-1 d-flex justify-content-center flex-column">
                            <h4 className="GH-text">Welcome to the HOME of GAMBLING!! <br /><br /> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta rem, voluptatem recusandae architecto doloremque quasi provident natus fugiat sunt voluptas. Laborum amet similique deleniti tempora voluptatem explicabo ipsum, laboriosam magni.</h4>
                            <Link className="go-to" to='/login'>
                                <Button variant="outlined" color="primary" className='get-started'>
                                    Get Started
                                </Button>
                            </Link>
                        </div>
                        <div className="col-md-6 pt-5 pt-lg-0 order-1 order-md-2 d-flex justify-content-center">
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
