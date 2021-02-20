import React,{useState,useEffect,useContext} from 'react'
import Button from '@material-ui/core/Button';
import ClearIcon from '@material-ui/icons/Clear';
import S2 from './images/cards/S2.png'
import S3 from './images/cards/S3.png'
import S4 from './images/cards/S4.png'
import S5 from './images/cards/S5.png'
import S6 from './images/cards/S6.png'
import S7 from './images/cards/S7.png'
import S8 from './images/cards/S8.png'
import S9 from './images/cards/S9.png'
import S10 from './images/cards/S10.png'
import AS from './images/cards/AS.png'
import KS from './images/cards/KS.png'
import JS from './images/cards/JS.png'
import QS from './images/cards/QS.png'
import QM from './images/cards/qm.png'

const Blackjack = () => {

    const [start,setstart] = useState(0);
    const [retry,setretry] = useState(1);

    const [amt, setamt] = useState(0)
    const [bal,setbal] = useState(2000)
    const [text,settext] = useState("Enter a minimum of 10$ to start your game.")
    const [u1,setu1] = useState("")
    const [u2,setu2] = useState("")
    const [u3,setu3] = useState("")
    const [u4,setu4] = useState("")
    const [u5,setu5] = useState("")
    const [totalU,settotalU] = useState(0)   
    const [c1,setc1] = useState("")
    const [c2,setc2] = useState("")
    const [c3,setc3] = useState("")
    const [c4,setc4] = useState("")
    const [c5,setc5] = useState("")
    const [totalC,settotalC] = useState("0")
    const [random,setrandom] = useState([0,0,0,0,0,0,0,0,0,0])

    const cardsimg = [S2,S3,S4,S5,S6,S7,S8,S9,S10,JS,QS,KS,AS]
    const cards=['2','3','4','5','6','7','8','9','10','J','Q','K','A']
    const cardsValue=[2,3,4,5,6,7,8,9,10,10,10,10,1]
    const [hide,sethide] = useState(0)

    const checkBalance = () => {
        console.log(amt);
        if (amt <= bal){
            if (amt === 0 || amt === undefined || amt === null)
            {
                alert('Please enter amount!!')
            }
            else{
                shuffle()
            }
        }
        else{
            alert('Value entered is more than available balance!!')
            setamt(0)
        }
    }

    const shuffle = () => {
        settext("Game Started!!")
        setstart(1)
        sethide(1)
        if(amt>=10){
            if (random[0] === 0 ){
                setbal(bal-amt)
                random[0] = Math.floor(Math.random()*13)
                random[1] = Math.floor(Math.random()*13)
                random[5] = Math.floor(Math.random()*13)
                random[6] = Math.floor(Math.random()*13)
                setu1(cardsimg[random[0]])
                setu2(cardsimg[random[1]])
                setc1(cardsimg[random[5]])
                setc2(cardsimg[random[6]])
                findTotal()
            }
        }
        else{
            alert('Please enter a minimun of 10$!!')
        }
    }

    
    const findTotal = () => {
        settotalU(cardsValue[random[0]] + cardsValue[random[1]] + (random[2] ? cardsValue[random[2]] : 0) + (random[3] ? cardsValue[random[3]] : 0) + (random[4] ? cardsValue[random[4]] : 0))
        settotalC(cardsValue[random[5]] + cardsValue[random[6]] + (random[7] ? cardsValue[random[7]] : 0) + (random[8] ? cardsValue[random[8]] : 0) + (random[9] ? cardsValue[random[9]] : 0))
        if(cardsValue[random[0]] + cardsValue[random[1]] + (random[2] ? cardsValue[random[2]] : 0) + (random[3] ? cardsValue[random[3]] : 0) + (random[4] ? cardsValue[random[4]] : 0) > 21){
            settext("Busted")
            sethide(-1)
            setretry(0)
        }
    }

    const Retry = () => {
        setretry(1)
        setstart(0)
        random[0]=0
        setrandom([0,0,0,0,0,0,0,0,0,0])
        setu1(null)
        setu2(null)
        setu3(null)
        setu4(null)
        setu5(null)
        setc1(null)
        setc2(null)
        setc3(null)
        setc4(null)
        setc5(null)
        random[2]=0
        random[3]=0
        settotalU(0)
        settotalC(0)
        settext("Enter a minimum of 10$ to start your game.")
        sethide(0)
        setamt(0)
    }



    const UserHit = () => {
        if(totalU > 21)
        {
            settext("You Lose")
            sethide(-1)
            setretry(0)
            setstart(0)
            
        }
        else if(totalU === 21){
            settext("You Won!! Blackjack!!")
            setbal(bal+amt+amt)
        }
        else if(totalU< 21){
            if(random[2] === 0){
                random[2] = Math.floor(Math.random()*13)
                setu3(cardsimg[random[2]])
                findTotal()
                if((cardsValue[random[0]] + cardsValue[random[1]] + (random[2] ? cardsValue[random[2]] : 0) + (random[3] ? cardsValue[random[3]] : 0) + (random[4] ? cardsValue[random[4]] : 0)) === 21){
                    settext("You Won!! Blackjack!!")
                    setbal(bal+amt+amt)
                    sethide(-1)
                    setretry(0)
                    setstart(0)
                }
            }
            else if(random[3] === 0){
                random[3] = Math.floor(Math.random()*13)
                setu4(cardsimg[random[3]])
                findTotal()
                if((cardsValue[random[0]] + cardsValue[random[1]] + (random[2] ? cardsValue[random[2]] : 0) + (random[3] ? cardsValue[random[3]] : 0) + (random[4] ? cardsValue[random[4]] : 0)) === 21){
                    settext("You Won!! Blackjack!!")
                    setbal(bal+amt+amt)
                    sethide(-1)
                    setretry(0)
                    setstart(0)
                }
            }
            else if(random[4] === 0){
                random[4] = Math.floor(Math.random()*13)
                setu5(cardsimg[random[4]])
                findTotal()
                if((cardsValue[random[0]] + cardsValue[random[1]] + (random[2] ? cardsValue[random[2]] : 0) + (random[3] ? cardsValue[random[3]] : 0) + (random[4] ? cardsValue[random[4]] : 0)) === 21){
                    settext("You Won!! Blackjack!!")
                    setbal(bal+(3/2(amt)))
                    setamt(0)
                    sethide(-1)
                    setretry(0)
                    setstart(0)
                }
            }
        } 
    }
    

    const Check = () => {

            sethide(-1) 
            if((cardsValue[random[5]] + cardsValue[random[6]] + (random[7] ? cardsValue[random[7]] : 0) + (random[8] ? cardsValue[random[8]] : 0) + (random[9] ? cardsValue[random[9]] : 0))<16){
                if(random[7] === 0){
                    random[7] = Math.floor(Math.random()*13)
                    setc3(cardsimg[random[7]])
                    findTotal()
                    
                }
            }
            if((cardsValue[random[5]] + cardsValue[random[6]] + (random[7] ? cardsValue[random[7]] : 0) + (random[8] ? cardsValue[random[8]] : 0) + (random[9] ? cardsValue[random[9]] : 0))<16){
                if(random[8] === 0){
                random[8] = Math.floor(Math.random()*13)
                setc4(cardsimg[random[8]])
                findTotal()
                }
                }

            if((cardsValue[random[5]] + cardsValue[random[6]] + (random[7] ? cardsValue[random[7]] : 0) + (random[8] ? cardsValue[random[8]] : 0) + (random[9] ? cardsValue[random[9]] : 0))<16){
                if(random[9] === 0){
                random[9] = Math.floor(Math.random()*13)
                setc5(cardsimg[random[9]])
                findTotal()
                }
                }

            if((cardsValue[random[5]] + cardsValue[random[6]] + (random[7] ? cardsValue[random[7]] : 0) + (random[8] ? cardsValue[random[8]] : 0) + (random[9] ? cardsValue[random[9]] : 0))>21  || (totalU>(cardsValue[random[5]] + cardsValue[random[6]] + (random[7] ? cardsValue[random[7]] : 0) + (random[8] ? cardsValue[random[8]] : 0) + (random[9] ? cardsValue[random[9]] : 0)) &&  totalU<=21)){
                settext("You won!!")
                setbal(bal+amt+amt)
                setamt(0)
                setretry(0)
            }
            else if((cardsValue[random[5]] + cardsValue[random[6]] + (random[7] ? cardsValue[random[7]] : 0) + (random[8] ? cardsValue[random[8]] : 0) + (random[9] ? cardsValue[random[9]] : 0)) === totalU){
                settext("Tie!! You didn't lose anything")
                setbal(bal+amt)
                setamt(0)
                setretry(0)
            }
            else{
                settext("You Lose!!")
                setamt(0)
                setretry(0)
            }
        }




    const amtchange = (event) =>{
        const value = event.target.value;
        if (value <= bal){
            setamt(value)
            console.log(value);
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

    let h4,count,p
    if(hide === 0){
        h4 = <img src='' alt=""/>
        count =  0
        p=<p>Cards will be displayed here...</p>
    }
    else if(hide === 1){
        h4 = <img src={QM} alt=""/>
        count =  '?'
        p=<p></p>
    }
    else if(hide === -1){
        h4 = <img src={c2} alt=""/>  
        count = totalC
        p=<p></p>
    }  
  

    return (
        <div className="d-flex align-items-center">
            <div className="container-fluid cont">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <div className="d-flex flex-column">
                            <h3 className="text-center">Welcome User</h3>
                            <br />
                            <h4 className="text-right">Available Balance: {bal}$</h4>
                            <h3 className="text-center bj-head">BLACKJACK</h3>
                            <div className="row mt-5">
                                <div className="col-md-6 text-center">
                                    <div className="bj-user-hand">
                                        <h3>User</h3>
                                        <div className="d-flex disp">
                                            <img src={u1} alt=""/>
                                            <img src={u2} alt=""/>
                                            <img src={u3} alt=""/>
                                            <img src={u4} alt=""/>
                                            <img src={u5} alt=""/>
                                            {p}
                                        </div>
                                        <h4 className="text-center mt-4 d-flex flex-colume justify-content-center">Total  {totalU}</h4>
                                    </div>
                                </div>
                                <div className="col-md-6 text-center">
                                    <div className="bj-comp-hand">
                                        <h3>Comp</h3>
                                        <div className="d-flex disp">
                                            <img src={c1} alt=""/>
                                            {h4}
                                            <img src={c3} alt=""/>
                                            <img src={c4} alt=""/>
                                            <img src={c5} alt=""/>
                                            {p}
                                        </div>
                                        <h4 className="text-center mt-4 d-flex flex-row justify-content-center">Total {count}</h4>
                                    </div>
                                </div>
                            </div>
                            <h4 className="text-right mt-4">{text}</h4>
                            <div className="mt-5 d-flex amount-slots">
                                
                                {start?<h4>Amount Betted : {amt}</h4>:
                                <>
                                <h3 className="mr-4">Enter Amount</h3>
                                <input className="w-200" autoComplete="off" type="number" placeholder="100,500,1000,..." value={amt} onChange={amtchange}/>
                                </>}
                                <div className="add-btns ml-auto">
                                    {start?null:
                                    <Button onClick={btn1} variant="outlined" className="mt-5 slots-button" color="primary">
                                        <ClearIcon />
                                    </Button>}
                                    {start?null:
                                    <Button onClick={btn2} variant="outlined" className="mt-5 slots-button" color="primary">
                                        +100
                                    </Button>}
                                    {start?null:
                                    <Button onClick={btn3} variant="outlined" className="mt-5 slots-button" color="primary">
                                        +500
                                    </Button>}
                                    {start?null:
                                    <Button onClick={btn4} variant="outlined" className="mt-5 slots-button" color="primary">
                                        +1000
                                    </Button>}
                                    {start?null:
                                    <Button onClick={btn5} variant="outlined" className="mt-5 slots-button" color="primary">
                                        Max
                                    </Button>}
                                </div>
                                </div>
                                <div className=" mx-auto mt-5 d-flex justify-content-center">
                                    {start?null:
                                    <Button variant="outlined" className="mt-5 bj-retry" color="primary" onClick={checkBalance}>
                                        START
                                    </Button>}
                                    {start?retry?
                                    <Button variant="outlined" className="mt-5 bj-hit" color="primary" onClick={UserHit}>
                                        HIT
                                    </Button>:null:null}
                                    {start?retry?<Button variant="outlined" className="mt-5 bj-hit" color="primary" onClick={Check}>
                                        STAND
                                    </Button>:null:null}
                                    {start?<Button variant="outlined" className="mt-5 bj-hit" color="primary" onClick={Retry}>
                                        RETRY
                                    </Button>:null}
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Blackjack
