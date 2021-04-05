import React, { useState } from "react";
import { connect } from "react-redux";

//Impot actions
import { userMessage, sendMessage }  from "../../actions/assistant";

const Vasst = ({ chat, userMessage, sendMessage }) =>{
//Handles user message
  const [message, setMessage] = useState("");


  //Handle user's submission
  const handleClick = async(e) => {
    const code = e.keyCode || e.which;
    if(code === 13){
      console.log(message);
      userMessage(message);
      sendMessage(message);
      setMessage("");
    }

  }

  return(
    <div className = "chat">
      <h1> Virtual Assistant </h1>
      <p> Type in symptoms to start </p>
        {/* Handle Messages */}
        {chat.length ===0 ? "" : chat.map(msg =>{  return <div className={msg.type}> {msg.message} </div> }) }
        {/* Handle Messages */}
        <input
          id="chatBox"
          onChange = {(e)=> setMessage(e.target.value)}
          onKeyPress={handleClick}
          value={message}></input>
    </div>
  );
};

// Map current redux state to Chat component as props
const mapStateToProps = (state) =>({
  //Allows us to access message queues inside chat component
  chat: state.assistant.messages,
});

//Hook this up to redux -- Maps state to userMessage
export default connect( mapStateToProps, {userMessage, sendMessage})(Vasst);
