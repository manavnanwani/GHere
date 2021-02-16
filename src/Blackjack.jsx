import React,{useState} from 'react'
import Button from '@material-ui/core/Button';
import ClearIcon from '@material-ui/icons/Clear';

const Blackjack = () => {

    const [amt, setamt] = useState(0)
    const [bal,setbal] = useState(2000)
    const [text,settext] = useState("Enter a minimum of 10$ to start your game.")
    const [u1,setu1] = useState("")
    const [u2,setu2] = useState("")
    const [u3,setu3] = useState("")
    const [u4,setu4] = useState("")
    const [totalU,settotalU] = useState(0)   
    const [c1,setc1] = useState("")
    const [c2,setc2] = useState("")
    const [c3,setc3] = useState("")
    const [c4,setc4] = useState("")
    const [totalC,settotalC] = useState("0")
    const [random,setrandom] = useState([0,0,0,0,0,0,0,0,0,0])

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
        
        sethide(1)
        if(amt>=10){
            if (random[0] === 0 ){
                setbal(bal-amt)
                random[0] = Math.floor(Math.random()*13)
                random[1] = Math.floor(Math.random()*13)
                random[5] = Math.floor(Math.random()*13)
                random[6] = Math.floor(Math.random()*13)
                setu1(cards[random[0]])
                setu2(cards[random[1]])
                setc1(cards[random[5]])
                setc2(cards[random[6]])
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
        }
    }

    const Retry = () => {
        random[0]=0
        setrandom([0,0,0,0,0,0,0,0,0,0])
        setu1(null)
        setu2(null)
        setu3(null)
        setu4(null)
        setc1(null)
        setc2(null)
        setc3(null)
        setc4(null)
        random[2]=0
        random[3]=0
        settotalU(0)
        settotalC(0)
        settext("Enter a minimum of 10$ to start your game.")
        sethide(0)
        setamt(0)
}

    const checkAmount = () =>{
        if (amt<10)
        {
            alert('Please enter the right amount first!!')
            return 0
        }
        return 1
    }

    const UserHit = () => {
        if(checkAmount()){
        if(totalU > 21)
        {
            settext("You Lose")
            sethide(-1)
            setamt(0)
        }
        else if(cardsValue[random[0]] + cardsValue[random[1]] + (random[2] ? cardsValue[random[2]] : 0) + (random[3] ? cardsValue[random[3]] : 0) + (random[4] ? cardsValue[random[4]] : 0) === 21){
            settext("You Won!! Blackjack!!")
            setbal(bal+amt+amt)
            setamt(0)
        }
        else if(totalU< 21){
            if(random[2] === 0){
                random[2] = Math.floor(Math.random()*13)
                setu3(cards[random[2]])
                findTotal()
            }
            else if(random[3] === 0){
                random[3] = Math.floor(Math.random()*13)
                setu4(cards[random[3]])
                findTotal()
            }
        } 
    }
    }

    const Check = () => {
        if(checkAmount()){  
            sethide(-1) 
            if((cardsValue[random[5]] + cardsValue[random[6]] + (random[7] ? cardsValue[random[7]] : 0) + (random[8] ? cardsValue[random[8]] : 0) + (random[9] ? cardsValue[random[9]] : 0))<16){
                if(random[7] === 0){
                    random[7] = Math.floor(Math.random()*13)
                    setc3(cards[random[7]])
                    findTotal()
                    
                }
            }
            if((cardsValue[random[5]] + cardsValue[random[6]] + (random[7] ? cardsValue[random[7]] : 0) + (random[8] ? cardsValue[random[8]] : 0) + (random[9] ? cardsValue[random[9]] : 0))<16){
                if(random[8] === 0){
                random[8] = Math.floor(Math.random()*13)
                setc4(cards[random[8]])
                findTotal()
                }
                }

            if((cardsValue[random[5]] + cardsValue[random[6]] + (random[7] ? cardsValue[random[7]] : 0) + (random[8] ? cardsValue[random[8]] : 0) + (random[9] ? cardsValue[random[9]] : 0))>21  || (totalU>(cardsValue[random[5]] + cardsValue[random[6]] + (random[7] ? cardsValue[random[7]] : 0) + (random[8] ? cardsValue[random[8]] : 0) + (random[9] ? cardsValue[random[9]] : 0)) &&  totalU<=21)){
                settext("You won!!")
                setbal(bal+amt+amt)
                setamt(0)
            }
            else if((cardsValue[random[5]] + cardsValue[random[6]] + (random[7] ? cardsValue[random[7]] : 0) + (random[8] ? cardsValue[random[8]] : 0) + (random[9] ? cardsValue[random[9]] : 0)) === totalU){
                settext("Tie!! You didn't lose anything")
                setbal(bal+amt)
                setamt(0)
            }
            else{
                settext("You Lose!!")
                setamt(0)
            }
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

    let h4,count
    if(hide === 0){
        h4 = <h4></h4>
        count =  0
    }
    else if(hide === 1){
        h4 = <h4>?</h4>
        count =  '?'
    }
    else if(hide === -1){
        h4 = <h4>{c2}</h4>  
        count = totalC
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
                            {/* <div className="row mt-5">
                                <div className="col-md-10 mx-auto"> */}
                                    <h3 className="text-center bj-head">BLACKJACK</h3>
                                    <div className="row mt-5">
                                        <div className="col-md-6 text-center">
                                            <div className="bj-user-hand">
                                                <h3>User</h3>
                                                <div className="d-flex disp">
                                                    <h4>{u1}</h4>
                                                    <h4>{u2}</h4>
                                                    <h4>{u3}</h4>
                                                    <h4>{u4}</h4>
                                                </div>
                                                <h4 className="text-center mt-4 d-flex flex-colume justify-content-center">Total  {totalU}</h4>
                                            </div>
                                        </div>
                                        <div className="col-md-6 text-center">
                                            <div className="bj-comp-hand">
                                                <h3>Comp</h3>
                                                <div className="d-flex disp">
                                                    <h4>{c1}</h4>
                                                    {h4}                 
                                                    <h4>{c3}</h4>
                                                    <h4>{c4}</h4>
                                                </div>
                                                <h4 className="text-center mt-4 d-flex flex-row justify-content-center">Total {count}</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <h4 className="text-right mt-4">{text}</h4>
                                    <div className="mt-5 d-flex amount-slots">
                                        <h3 className="mr-4">Enter Amount</h3>
                                        <input className="w-200" autoComplete="off" type="number" placeholder="100,500,1000,..." value={amt} onChange={amtchange}/>
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
                                        <div className=" mx-auto mt-5 d-flex justify-content-center">
                                            <Button variant="outlined" className="mt-5 bj-retry" color="primary" onClick={checkBalance}>
                                                START
                                            </Button>
                                            <Button variant="outlined" className="mt-5 bj-hit" color="primary" onClick={UserHit}>
                                                HIT
                                            </Button>
                                            <Button variant="outlined" className="mt-5 bj-hit" color="primary" onClick={Check}>
                                                STAND
                                            </Button>
                                            <Button variant="outlined" className="mt-5 bj-hit" color="primary" onClick={Retry}>
                                                RETRY
                                            </Button>
                                        </div>
                                </div>
                            </div>
                        {/* </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Blackjack
