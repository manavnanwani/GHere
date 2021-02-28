import React, { useState,useEffect } from 'react'
import slots from './images/slots1.jpg'
import blackjack from './images/blackjack1.jpg'
import ladder from './images/ladder.jpg'

import {NavLink, Redirect} from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux';
import {load_user} from './actions/auth'
import Button from '@material-ui/core/Button';

const Games = ({load_user,name,balance}) => {
    const [n,setn] = useState('');
    const [bal,setbal] = useState(0);

    const getBalance = () =>{
        load_user();
        setn(name)
        setbal(balance)
    }
      
    useEffect(() => {
        if (localStorage.getItem('access')) {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('access')}`,
                    'Accept': 'application/json'
                }
            }; 
            try {
                const res = axios.get(`${process.env.REACT_APP_API_URL}/auth/users/me/`, config);
                setn(res.first_name)
                setbal(res.balance)
                getBalance()
            } catch (err) {
                    alert(err)
            }
        } else {
                alert('error')
        }
    })

    return (
        <div className="d-flex align-items-center">
            <div className="container-fluid cont">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <h1 className="text-center">Welcome to the games <span className="cust-name">{n}</span></h1>
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

const mapStateToProps = state => ({
    name: state.auth.name,
    balance: state.auth.balance,
});

export default connect(mapStateToProps,{load_user})(Games)
// export default Games
