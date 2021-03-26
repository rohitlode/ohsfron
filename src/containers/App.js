import {Component} from 'react';
import ContactDirectory from '../components/ContactDirectory';
import SearchBox from '../components/SearchBox';
import SignIn from '../components/SignIn'
import {avatars} from '../avatars';
import Scroll from '../components/Scroll';
import Navigation from '../components/Navigation';
import Signup from '../components/Signup';

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
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>response.json())
    .then(users=>this.setState({avatars: users}));
    //this.setState({avatars: avatars});
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
    else {
      this.setState({route: "Sign in"});
    }
  }

  //render will be called everytime setState is called!
  render(){

    let filteredNames = this.state.avatars.filter(avatar => {
      return avatar.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    })
   return (

     <div className='tc'>
     {
       this.state.route === 'signin'
       ?
         <SignIn routeChange = {this.onRouteChange} />
       : this.state.route === 'signup'
       ? <Signup routeChange = {this.onRouteChange} />
       :<div>
       <Navigation routeChange = {this.onRouteChange}/>
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
   );
 }
}

export default App;
