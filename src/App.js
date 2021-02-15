import logo from './logo.svg';
import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Login from './Login'
import SignUp from './SignUp'
import Games from './Games'
import Slots from './Slots'
import Blackjack from './Blackjack'

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/signup' component={SignUp}/>
        <Route exact path='/games' component={Games}/>
        <Route exact path='/slots' component={Slots}/>
        <Route exact path='/blackjack' component={Blackjack}/>
        <Redirect to='/'/>
      </Switch>
    </div>
  );
}

export default App;
