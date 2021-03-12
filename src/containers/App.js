import {Component} from 'react';
import ContactDirectory from '../components/ContactDirectory';
import SearchBox from '../components/SearchBox';
import {avatars} from '../avatars';
import Scroll from '../components/Scroll';

class App extends Component{
  constructor(){
    super();
    this.state = {
      avatars: [],
      searchField: ''
    }
  }

  componentDidMount(){
    // fetch("https://jsonplaceholder.typicode.com/users").
    // then(response=>response.json()).then(users=>this.setState({avatars: users}));
    this.setState({avatars: avatars});
  }

  onSearchChange = (event)=>{
    this.setState({searchField: event.target.value});
  }

  //render will be called everytime setState is called!
  render(){
    let filteredNames = this.state.avatars.filter(avatar => {
      return avatar.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    })
   return (
     <div className='tc'>
       <h1> Doctors Directory </h1>
       <SearchBox searchChange = {this.onSearchChange}/>
       <div className='container bootstrap snippets bootdey'>
        <Scroll>
         <ContactDirectory avatars={filteredNames}/>
        </Scroll>
       </div>
     </div>
   );
 }
}

export default App;
