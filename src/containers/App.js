//Import dependencies
import {useEffect, useState} from 'react';
import SignIn from '../components/SignIn'
import Navigation from '../components/Navigation';
import Signup from '../components/Signup';
import Home from '../components/Home';
import About from "../components/About";
import Scheduler from "../components/Scheduler";
import Doctors from '../components/Doctors';
import { Route, Switch } from 'react-router-dom';
import './main.css';

//Import Redux components
import {Provider} from "react-redux";
import store from "../store";

//Import Chart components
import Vasst from "../components/vasst/Vasst";

//Import actiom
import {createSession} from "../actions/assistant"

//Import axios
import axios from "axios";

if(localStorage.session){
  delete axios.defaults.headers.common["session_id"];
  axios.defaults.headers.common["session_id"] = localStorage.session;
}else{
  delete axios.defaults.headers.common["session_id"];
}

function App() {

  //States  

  const [route, setRoute] = useState('signin');


  //Event function for SignIn
  const onRouteChange = (route) => {
    console.log("Clicked ",route);
    setRoute(route);
  }

  //useEffect
  useEffect(() => {
    if(!localStorage.session){
          store.dispatch(createSession());
        }else{
    
        }
  }, []);

  //render will be called everytime setState is called!
  // render(){

  return (
     <Provider store={ store }>
       <div className='tc' className="cover bg-left bg-center-l" >
       <Navigation onRouteChange = {onRouteChange}/>
       </div>

       <Switch>
          <Route  path="/" exact component = {Home} />
          <Route  path="/signin" component = {SignIn}/>
          <Route  exact path="/doctors" component = {Doctors}/>
          <Route  path="/virtualAssistant" component = {Vasst}/>
          <Route  path="/about" component= {About}/>
          <Route  path="/signup" component= {Signup}/>
          <Route  path="/scheduler" component= {Scheduler}/>
       </Switch>
     </Provider>
  
   );
//  }
}

export default App;
