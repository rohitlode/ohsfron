import React from 'react';
import './Contact.css';
import 'font-awesome/css/font-awesome.min.css';


function Contact(props){
  return (
    <div className="col-sm-4">
      <div className="box-info text-center user-profile-2">
        <div className="header-cover">
          <img src="https://placeimg.com/640/480/any" alt="User cover"/>
        </div>
        <div className="user-profile-inner">
          <br></br>
          <img src={`https://bootdey.com/img/Content/avatar/avatar${props.id}.png`} className="rounded-circle profile-avatar" alt="User avatar"/>
          <h5>{props.name}</h5>
          <p>{props.email}</p>
          <div className="user-button">
            <div className="row">
              <div className="col-md-6">
                <button type="button" className="btn btn-primary btn-sm btn-block"><i className="fa fa-envelope"></i> Send Message</button>
              </div>
              <div className="col-md-6">
                <button type="button" className="btn btn-default btn-sm btn-block"><i className="fa fa-user"></i> Add as friend</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
 
}

export default Contact;
