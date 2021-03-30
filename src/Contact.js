import React from 'react';
import './Contact.css';
import 'font-awesome/css/font-awesome.min.css';
function Card(){

  return (
    <div class="col-sm-4">
      <div class="box-info text-center user-profile-2">
        <div class="header-cover">
          <img src="https://placeimg.com/640/480/any" alt="User cover"/>
        </div>
        <div class="user-profile-inner">
          <br></br>
          <img src="https://bootdey.com/img/Content/avatar/avatar7.png" class="rounded-circle profile-avatar" alt="User avatar"/>
          <h5>Administrator</h5>

          <div class="user-button">
            <div class="row">
              <div class="col-md-6">
                <button type="button" class="btn btn-primary btn-sm btn-block"><i class="fa fa-envelope"></i> Send Message</button>
              </div>
              <div class="col-md-6">
                <button type="button" class="btn btn-default btn-sm btn-block"><i class="fa fa-user"></i> Add as friend</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
 
}

export default Card;
