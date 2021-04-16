import Contact from './Contact';


function ContactDirectory({avatars}){
  return (
    <div className='row'>
      {avatars.map((user,i) => {
        return (
        <Contact
          key ={i}
          id={avatars[i].id}
          name={avatars[i].name}
          email={avatars[i].email}
          profession={avatars[i].profession}
        />)
      }) }
    </div>
  );

}

export default ContactDirectory;
