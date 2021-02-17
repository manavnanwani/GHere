import React,{useState} from 'react'
import Button from '@material-ui/core/Button';
import ClearIcon from '@material-ui/icons/Clear';
import dice1 from './images/dice-1.png'
import dice2 from './images/dice-2.png'
import dice3 from './images/dice-3.png'
import dice4 from './images/dice-4.png'
import dice5 from './images/dice-5.png'
import dice6 from './images/dice-6.png'

const Slots = () => {

    const [amt, setamt] = useState(0)
    const [bal,setbal] = useState(2000)
    const [text,settext] = useState("Roll the dices to start the bet!!!")


    const [first, setfirst] = useState()
    const [second, setsecond] = useState()
    const [third, setthird] = useState()
    const arr=[dice1,dice2,dice3,dice4,dice5,dice6]

    const random = Math.floor(Math.random()*6)
    const random1 = Math.floor(Math.random()*6)
    const random2 = Math.floor(Math.random()*6)


    const checkResult = (f,s,t) => {
        if (f === s && s === t){
            settext(`Jackpot!! You won ${amt*2}$`);
            setbal(bal+(amt*2))
        }
        else if (f === s || s === t || t === f){
            settext(`Two dice same!! You won ${amt*0.4}$`);
            setbal(bal+(amt*0.4))
        }
        else{
            settext('Bad Luck, You won nothing!! Try Again!!');
            setbal(bal-amt)
        }
    }

    const changeSlots = () => {
        if (amt <= bal){
            if (amt === 0 || amt === undefined || amt === null)
            {
                alert('Please enter amount!!')
            }
            else{
                let firstChange = arr[random];
                setfirst(firstChange);

                let secondChange = arr[random1];
                setsecond(secondChange);

                let thirdChange = arr[random2];
                setthird(thirdChange);

                setbal(bal-amt)
                setamt(0)

                checkResult(firstChange, secondChange, thirdChange);        
            }
        }
        else{
            alert('Value entered is more than available balance!!')
            setamt(0)
        }
    }
    
    const amtchange = (event) =>{
        const value = event.target.value;
        if (value <= bal){
            setamt(value)
        }
        else{
            alert('Value entered is more than available balance!!')
        }
    }


    const btn1 = () =>{
        setamt(0)
    }
    const btn2 = () =>{
        setamt(amt+100)
    }
    const btn3 = () =>{
        setamt(amt+500)
    }
    const btn4 = () =>{
        setamt(amt+1000)
    }
    const btn5 = () =>{
        setamt(bal)
    }

    return (
        <div>
            <div className="d-flex align-items-center">
                <div className="container-fluid cont">
                    <div className="row">
                        <div className="col-md-10 mx-auto">
                            <div className="d-flex flex-column">
                                <h3 className="text-center">Welcome User</h3>
                                <br />
                                <h4 className="text-right">Available Balance: {bal}$</h4>
                            </div>
                            <div className="row mt-5 slots-main">
                                <div className="first col-md-4 pt-5 pt-lg-0 order-2 order-lg-1 ">
                                    <img className="dice" src={first} alt=""/>
                                </div>
                                <div className="second col-md-4 pt-5 pt-lg-0 order-2 order-lg-1 ">
                                    <img className="dice" src={second} alt=""/>
                                </div>
                                <div className="third col-md-4 pt-5 pt-lg-0 order-2 order-lg-1 ">
                                    <img className="dice" src={third} alt=""/>
                                </div>
                            </div>
                            <div>
                                <h5 className="text-right mt-4">{text}</h5>
                            </div>
                            <div className="reroll-div">
                                <Button variant="outlined" className="mt-5 slots-button" color="primary" onClick={changeSlots}>
                                    Roll
                                </Button>
                            </div>
                            <div className="mt-5 d-flex amount-slots">
                                <h3 className="mr-4">Enter Amount</h3>
                                <input autoComplete="off" type="number" placeholder="100,500,1000,..." value={amt} onChange={amtchange} defaultValue="0"/>
                                <div className="add-btns ml-auto">
                                    <Button onClick={btn1} variant="outlined" className="mt-5 slots-button" color="primary">
                                        <ClearIcon />
                                    </Button>
                                    <Button onClick={btn2} variant="outlined" className="mt-5 slots-button" color="primary">
                                        +100
                                    </Button>
                                    <Button onClick={btn3} variant="outlined" className="mt-5 slots-button" color="primary">
                                        +500
                                    </Button>
                                    <Button onClick={btn4} variant="outlined" className="mt-5 slots-button" color="primary">
                                        +1000
                                    </Button>
                                    <Button onClick={btn5} variant="outlined" className="mt-5 slots-button" color="primary">
                                        Max
                                    </Button>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slots
