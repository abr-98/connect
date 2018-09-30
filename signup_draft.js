//import React from 'react';
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import './Application.css';
import logo from './2018-09-22-23-22-04.jpg';
import './signup.js';


import './signup.css';
var createReactClass= require ('create-react-class');
<html>
<body>

  <div id="space"></div>
  <script src="/bundle.js"></script>
  <script src='./header.js'></script>
</body>
</html>

var Parent =createReactClass({ displayName: "Parent",

getInitialState: function getInitialState() {
  return { signup: false, login: true };
},
switch: function _switch(word) {
  var signup, login;
  if (word == "signup") {
    signup = true;
    login = false;
  } else {
    login = true;
    signup = false;
  }
  return this.setState({ login: login, signup: signup });
},
render: function render() {
  var self = this;
  return (
    React.createElement("div", null,
      React.createElement("div", { id: "buttons" },
        React.createElement("p", {
            id: "signupButton",
            onClick: self.switch.bind(null, "signup"),
            className: self.state.signup ? "yellow" : "blue" }, "Sign In"),



        React.createElement("p", {
            id: "loginButton",
            onClick: self.switch.bind(null, "login"),
            className: self.state.login ? "yellow" : "blue" },

          " ", "Login")),




      self.state.signup ? React.createElement(Signup, null) : null,
      self.state.login ? React.createElement(Login, null) : null));


} });


var Signup = createReactClass({ displayName: "Signup",
render: function render() {
  return (
    React.createElement("div", null,
      React.createElement("div", { id: "signup" },
        React.createElement("input", { type: "text", id: "first", placeholder: "First Name" }),
        React.createElement("input", { type: "text", id: "last", placeholder: "Last Name" }),
        React.createElement("input", { type: "email", id: "email", placeholder: "Email" }),
        React.createElement("input", { type: "password", id: "password", placeholder: "Password" }),
        React.createElement("input", { type: "password", id: "confirm", placeholder: "Confirm Password" }),
        React.createElement("button", { id: "send" }, "Signup"))));



} });


var Login = createReactClass({ displayName: "Login",
render: function render() {
  return (
    React.createElement("div", null,
      React.createElement("div", { id: "login" },
        React.createElement("input", { type: "email", id: "email", placeholder: "Email" }),
        React.createElement("input", { type: "password", id: "password", placeholder: "Password" }),
        React.createElement("button", { id: "send" }, "Login"))));



} });
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
class App extends React.Component {
  render() {
     return (
        <div>
           <App3/>
           <Parent/>
           
           
        </div>
     );
  }
}

//ReactDOM.render(React.createElement(Parent, null), document.getElementById("space"));
export default App;
