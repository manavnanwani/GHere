import React, { useState,useEffect, createContext } from 'react'
import slots from './images/slots1.jpg'
import blackjack from './images/blackjack1.jpg'
import ladder from './images/ladder.jpg'
import {NavLink, Redirect} from 'react-router-dom'
import axios from 'axios'
// import { balance } from './reducers/auth';

const Games = (state) => {
    useEffect(() => {
        // setbal(state.auth.balance)
    })
    const [name,setname] = useState('');
    const [bal,setbal] = useState('');
    return (
        <div className="d-flex align-items-center">
            <div className="container-fluid cont">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <h1 className="text-center">Welcome to the games <span className="cust-name">{name}</span></h1>
                        <h4 className="text-right">Balance : {bal}
                        </h4>
                        <div className="row mt-5">
                            <div className="col-md-4 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column text-center">
                                <NavLink className="games-slots-link" to='/slots'>
                                    <div className="games-slots">
                                        <img src={slots} className="slots-img" alt=""/>
                                        <h3>SLOTS</h3>
                                    </div>
                                </NavLink>
                            </div>
                            <div className="col-md-4 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column text-center">
                                <NavLink className="games-slots-link" to='/blackjack'>
                                    <div className="games-slots">
                                        <img src={blackjack} className="slots-img" alt=""/>
                                        <h3>BLACKJACK</h3>
                                    </div>
                                </NavLink>
                            </div>
                            <div className="col-md-4 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column text-center">
                            <NavLink className="games-slots-link" to=''>
                                    <div className="games-slots">
                                        <img src={ladder} className="slots-img" alt=""/>
                                        <h3>CLIMB</h3>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Games