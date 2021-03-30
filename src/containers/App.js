import {Component} from 'react';
import ContactDirectory from '../components/ContactDirectory';
import SearchBox from '../components/SearchBox';
import SignIn from '../components/SignIn'
import {avatars} from '../avatars';
import Scroll from '../components/Scroll';
import Navigation from '../components/Navigation';
import Signup from '../components/Signup';
import { Cards } from '../components/test';

//import { backwardChaining } from '../components/backwardChaining';

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
    });
    var abbr={};
    abbr["BC"] = "Behaviour_Change";
    abbr["AX"] = "Anxious";
    abbr["DI"] = "DISORDER";
    abbr["DL"] = "Delusions";
    abbr["EX"] = "Exasperate";
    abbr["DP"] = "Depression";
    abbr["SU"] = "Suicide";
    abbr["PR"] = "Paranoia";
    abbr["CC"] = "Concentration";
    abbr["IN"] = "Insomnia";
    abbr["AC"] = "Appetite_Changes";
    abbr["FG"] = "Fatigue";
    abbr["SD"] = "Selfdestruct";
    abbr["DF"] = "Dyingfear";
    abbr["SP"] = "Speech_Difficulty";
    abbr["TL"] = "Talkative";
    abbr["GD"] = "Grandiosity";
    abbr["MD"] = "Manicdepression";
    abbr["SX"] = "Sexdesire";
    abbr["PA"] = "Panic_Attack";
    abbr["AM"] = "Amnesia";
    abbr["RT"] = "Repeatedlygoingoverthoughts";
    abbr["RH"] = "Rapid_Heartbeat";
    abbr["PP"] = "PALPITATION";
    abbr["ADL"] =  "CLASS 1 DISORDER";
    abbr["AD"] =  "CLASS 2 DISORDER";
    abbr["ID"] =  "INITIAL_STAGE_DYSTHYMIA";
    abbr["IC"] =  "CLASS 4 DISORDER";
    abbr["CD"] =  "CLASS 3 DISORDER";
    abbr["AF"] =  "CLASS 5 DISORDER";
    abbr["IA"] =  "INITIAL_STAGE_PANICDISORDERAGROPHOBIA";
    abbr["SU"] =  "SUICIDE";
    abbr["IG"] =  "INITIAL_STAGE_GENERALIZED_ANXIETY_DISORDER";
    abbr["IS"] =  "INITIAL_STAGE_SCHIZOAFECTIVE_DISORDER";
    abbr["MD"] =  "MANICDEPRESSION";
    abbr["GD"] =  "GRANDIOSITY";
    abbr["IB"] =  "INITIAL_STAGE_BIPOLAR_DISORDER";
    abbr["IM"] =  "INITIAL_STAGE_MDD";
    abbr["TP"] = "Disease";
    abbr["ND"] = "NO_DISEASE";

    const bc = new backwardChaining();
    console.log(bc.calcClaus(13));
    //let diagnosed = bc.startProcess(abbr);
    let li= [];
    for (var i=0; i<5; i++){ li.push(<h2> {i} </h2>); }

   return (

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
