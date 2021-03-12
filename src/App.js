import {Component} from 'react';
import ContactDirectory from './ContactDirectory';
import SearchBox from './SearchBox';
import {avatars} from './avatars';

class App extends Component{
  constructor(){
    super();
    this.state = {
      avatars: avatars,
      searchField: ''
    }
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
         <ContactDirectory avatars={filteredNames}/>
       </div>
     </div>
   );
 }
}

export default App;
