import ContactDirectory from '../components/ContactDirectory';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import {useEffect, useState} from 'react';

function Doctors() {

    const [avatars, setAvatars] = useState([]);
    const [searchField, setSearchField] = useState("");

    const filteredNames = avatars.filter(avatar => {
        return avatar.name.toLowerCase().includes(searchField.toLowerCase());
    });


    //Event function
    const onSearchChange = (event) => {
        setSearchField(event.target.value);
    }

    

    useEffect(() => {
        console.log("useEffect called....");
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => setAvatars(users));
    }, []);

    return (
        <div className = "tc">
            <h1> Doctors Directory </h1>
            <SearchBox searchChange = {onSearchChange}/>
            <div className='container bootstrap snippets bootdey'>
                <Scroll>
                    <ContactDirectory avatars={filteredNames}/>
                </Scroll>
            </div>
        </div>


    );
}



export default Doctors;