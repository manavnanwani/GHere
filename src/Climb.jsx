import React,{useState,useEffect} from 'react'
import Button from '@material-ui/core/Button';
import ClearIcon from '@material-ui/icons/Clear';

const Climb = () => {
    const num = 'SAFE';
    const elements = Array(5).fill(0).map(row => new Array(3).fill(num))
    const num2 = 'BOMB';
    const [bal, setbal] = useState(2000)
    elements.forEach((arr) => {
        const random = Math.floor(Math.random() * 3)
        arr[random] = num2
        console.log(random);
    })

    const [check, setcheck] = useState(true)
    const [text, settext] = useState('')

    const goto = (a,b) => {
        setcheck(false)
        console.log(this);
        console.log(a);
        console.log(b);
    }

    return (
        <div className="container-fluid cont">
            <div className="row">
                <div className="col-md-10 mx-auto">
                    <div className="d-flex flex-column">
                        <h3 className="text-center">Welcome User</h3>
                        <br />
                        <h4 className="text-right">Available Balance: {bal}$</h4>
                    </div>
                    <div className="climb-main">   
                    {   
                        elements.map((steps,index)=>{
                            return(
                                <div className='climb-box'>
                                    {
                                        steps.map((side,sindex) => {
                                            return(
                                                <div className={check ? 'hide' : "hide unhide"} onClick={goto.bind(this,steps,side)} >
                                                    {check ? text : side}
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                        
                    </div>

                    <div className="reroll-div">
                        <Button variant="outlined" className="mt-5 slots-button" color="primary">
                            Start
                        </Button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Climb
