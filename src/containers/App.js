//Import dependencies
import {Component, useEffect} from 'react';
import ContactDirectory from '../components/ContactDirectory';
import SearchBox from '../components/SearchBox';
import SignIn from '../components/SignIn'
import {avatars} from '../avatars';
import Scroll from '../components/Scroll';
import Navigation from '../components/Navigation';
import Signup from '../components/Signup';
import { Cards } from '../components/test';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//Import Redux components
import {Provider} from "react-redux";
import store from "../store";

//Import Chart components
import Chat from "../components/chat/Chat";

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

class App extends Component{
  constructor(){
    super();
    this.state = {
      avatars: [],
      searchField: '',
      route:'signin' //Current page of app
    }
  }
  //After load
  componentDidMount(){
    // fetch("https://jsonplaceholder.typicode.com/users")
    // .then(response=>response.json())
    // .then(users=>this.setState({avatars: users}));
    this.setState({avatars: avatars});
    if(!localStorage.session){
      store.dispatch(createSession());
    }else{

    }
  }


//Event function
  onSearchChange = (event)=>{
    this.setState({searchField: event.target.value});
  }

  //Event function for SignIn
  onRouteChange =  (event) =>{
    console.log(event.target)
    console.log(event.target.value);
    if(event.target.value === "Sign in")
      this.setState({route: 'kjk'});
    else if(event.target.value == "register"){
      console.log("Registerrrrr");
      this.setState({route: 'signup'})
    }
    else if(event.target.value == "assistant"){
      console.log("Assistant");
      this.setState({route: 'assistant'});
    }
    else {
      this.setState({route: "Sign in"});
    }
  }

  //render will be called everytime setState is called!
  render(){

    let filteredNames = this.state.avatars.filter(avatar => {
      return avatar.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    });


   return (
     <Provider store={store}>
     <div className='tc'>
     {
       this.state.route === 'signin'
       ?
       <div>
        <h1> One Health System </h1>
         <SignIn routeChange = {this.onRouteChange} />
         </div>
       : this.state.route === 'signup'
       ? <Signup routeChange = {this.onRouteChange} />
       : this.state.route === 'assistant'
       ?<div>
         <Navigation routeChange = {this.onRouteChange}/>
       </div>
       :<div>
       <Navigation routeChange = {this.onRouteChange}/>
       <Chat />
       <h1> Doctors Directory </h1>
       <SearchBox searchChange = {this.onSearchChange}/>
       <div className='container bootstrap snippets bootdey'>
        <Scroll>
         <ContactDirectory avatars={filteredNames}/>
        </Scroll>
       </div>
       </div>
     }
     </div>
     </Provider>
   );
 }
}

export default App;
