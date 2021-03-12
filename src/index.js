import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Contact';
import './Contact.css';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import 'font-awesome/css/font-awesome.min.css';

ReactDOM.render(
  <div className='container bootstrap snippets bootdey'>
  <div className='row'>
    <Card/>
    <Card/>
    <Card/>
    </div>
  </div>
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
