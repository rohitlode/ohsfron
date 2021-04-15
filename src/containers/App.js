//Import dependencies
import {useEffect, useState} from 'react';
import SignIn from '../components/SignIn'
import Navigation from '../components/Navigation';
import Signup from '../components/Signup';
import Home from '../components/Home';
import Contact from "../components/ContactForm";
import Scheduler from "../components/Scheduler";
import Doctors from '../components/Doctors';
import Article from '../components/Article';
import Greeting from '../components/Greeting';
import Appointment from '../components/Appointment';
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
       <div className='tc'>
       <Navigation onRouteChange = {onRouteChange}/>
       </div>

       <Switch>
          <Route  path="/" exact component = {Home} />
          <Route  path="/signin" component = {SignIn}/>
          <Route  exact path="/doctors" component = {Doctors}/>
          <Route  path="/virtualAssistant" component = {Vasst}/>
          <Route  path="/contact" component= {Contact}/>
          <Route  path="/signup" component= {Signup}/>
          <Route  path="/scheduler" component= {Scheduler}/>
          <Route  path="/articles" component= {Article}/>
          <Route  path="/appointments" component={Appointment} />
          <Route  path="/greeting" component={Greeting} />
       </Switch>
       <div className="bg-black-80  pa4">
            <h2 className="fw1 tc white-90">One Health System </h2>
            <p className="fw1 tc white-90">Copyright © 2021, One Health System. All rights reserved.</p>
        </div>
     </Provider>
  
   );
//  }
}

export default App;
