import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import './Application.css';
import logo from './2018-09-22-23-22-04.jpg';

import './fill_details.css';
var createReactClass= require ('create-react-class');
class App3 extends Component {
  render() {
    return (
      <div className="Appliction">
        <header className="Application-header">
          <img src={logo} className="Application-logo" alt="logo" />
          <h1 className="Application-title">CONNECT</h1>
          
        </header>
        
      </div>
    );
  }
}
var Fill_details = createReactClass({ displayName: "Fill_Detais",
render: function render() {
  return (
    React.createElement("div", null,
      React.createElement("div", { id: "fill_details" },
        React.createElement("input", { type: "text", id: "first", placeholder: "First Name *" }),
        React.createElement("input", { type: "text", id: "last", placeholder: "Last Name *" }),
        React.createElement("input", { type: "email", id: "email", placeholder: "Email *" }),
        React.createElement("input", { type: "text", id: "gender", placeholder: "Gender *" }),
        React.createElement("input", { type: "text", id: "phone", placeholder: "Phone no" }),
        React.createElement("input", { type: "text", id: "birthday", placeholder: "Birthday (dd/mm/yyyy)" }),
        React.createElement("input", { type: "text", id: "lives_in", placeholder: "Adress *" }),
        React.createElement("input", { type: "text", id: "works_at", placeholder: "Current working company " }),
        React.createElement("input", { type: "text", id: "Institute_studied", placeholder: "Educated from " }),
        React.createElement("input", { type: "text", id: "post_of_work", placeholder: "Working post " }),
        React.createElement("button", { id: "send" }, "SUBMIT FORM"))));



} });
class App extends React.Component {
  render() {
     return (
        <div>
           <App3/>
           <Fill_details/>
           
           
        </div>
     );
  }
}
export default App;