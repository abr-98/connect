//import React from 'react';
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import './Application.css';
import { Redirect } from 'react-router-dom'
import logo from './2018-09-22-23-22-04.jpg';
//import './signup.js';


import './login.css';
var createReactClass= require ('create-react-class');
/*<html>
<body>

  <div id="space"></div>
  <script src="/bundle.js"></script>
  <script src='./header.js'></script>
</body>
</html>
*/
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
    React.createElement("div",{id:"box"}, null,
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
class Signup extends Component {
    constructor() {
        super();
        this.state = {
          fname: "",
          lname: "",
          email: "",
          password:"",
          c_password:"",
          errors:{},
          fields: {}
        };
      }
      handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
        if(!fields["fname"]){
          formIsValid = false;
          errors["fname"] = "Cannot be empty";
       }

       if(typeof fields["fname"] !== "undefined"){
          if(!fields["fname"].match(/^[a-zA-Z]+$/)){
             formIsValid = false;
             errors["fname"] = "Only letters";
          }        
       }

       //Email
       if(!fields["email"]){
          formIsValid = false;
          errors["email"] = "Cannot be empty";
       }

       if(typeof fields["email"] !== "undefined"){
          let lastAtPos = fields["email"].lastIndexOf('@');
          let lastDotPos = fields["email"].lastIndexOf('.');

          if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
             formIsValid = false;
             errors["email"] = "Email is not valid";
           }
      }  
      if(!fields["password"]){
        formIsValid = false;
        errors["password"] = "Cannot be empty";
     }
     if(!fields["c_password"]){
      formIsValid = false;
      errors["c_password"] = "Cannot be empty";
   }
   if(typeof fields["password"] !=="undefined"){
    let pass = fields["password"];
    let c_pass = fields["c_password"];
     if(pass!==c_pass)
       formIsValid=false;
       errors["password"]="password doesnot match";
   }

   this.setState({errors: errors});
       return formIsValid;
   }
   
  
   contactSubmit(e){
    e.preventDefault();

    if(this.handleValidation()){
       alert("Form submitted,you are registered,now please log in to continue");
    }else{
       alert("Form has errors.")
    }
  }

  handleChange(field, e){         
      let fields = this.state.fields;
      fields[field] = e.target.value;        
      this.setState({fields});
  }
      render() {
        
     
        const { fname, lname, email,password,c_password } = this.state;
        return (
            <form class="signup" onSubmit= {this.contactSubmit.bind(this)}>
            <input
              type="text"
              name="fname"
              class="first"
              value={fname}
              placeholder= "First Name *"
              onChange={this.handleChange.bind(this, "fname")} value={this.state.fields["fname"]}/>
                          <span style={{color: "red"}}>{this.state.errors["fname"]}</span>
            />
            <input
              type="text"
              name="lname"
              class="last"
              placeholder= "Last Name " 
              value={lname}
              onChange={this.handleChange.bind(this, "lname")} value={this.state.fields["lname"]}/>
                         
                         <br/>
            />
            <input
              type="email"
              name="email"
              class="email"
              value={email}
              placeholder= "Email *"
              onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}/>
                         <span style={{color: "red" ,margiRight:5}}>{this.state.errors["email"]}</span>
                         <br/>
            />
            <input
              type="password"
              name="password"
              class="password"
              value={password}
              placeholder= "password *"
              onChange={this.handleChange.bind(this, "password")} value={this.state.fields["password"]}/>
                         <span style={{color: "red"}}>{this.state.errors["password"]}</span>
                         <br/>
            />
            <input
              type="password"
              name="c_password"
              class="confirm"
              value={c_password}
              placeholder= "Confirm Password"
              onChange={this.handleChange.bind(this, "c_password")} value={this.state.fields["c_password"]}/>
              <span style={{color: "red"}}>{this.state.errors["c_password"]}</span>
              <br/>
            />
             <button class="send" type="submit">Sign up</button>
             
          </form>
        );
      }
    }
    class Login extends Component {
        constructor() {
            super();
            this.state = {
              
              email: '',
              password:'',
              errors2:{},
              fields2: {}
        };
              
      }
      renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='' />
        }
      } 
          handleValidation(){
            let fields2 = this.state.fields2;
            let errors2 = {};
            let formIsValid2 = true;
           
           //Email
           if(!fields2["email"]){
              formIsValid2 = false;
              errors2["email"] = "Cannot be empty";
           }
    
           if(typeof fields2["email"] !== "undefined"){
              let lastAtPos = fields2["email"].lastIndexOf('@');
              let lastDotPos = fields2["email"].lastIndexOf('.');
    
              if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields2["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields2["email"].length - lastDotPos) > 2)) {
                 formIsValid2 = false;
                 errors2["email"] = "Email is not valid";
               }
          }  
          if(!fields2["password"]){
            formIsValid2 = false;
            errors2["password"] = "Cannot be empty";
         }
        
       this.setState({errors2: errors2});
           return formIsValid2;
       }
       contactSubmit(e){
        e.preventDefault();
    
        if(this.handleValidation()){
          {this.setRedirect};
      {this.setRedirect} 
        }else{
           alert("Login failed.try again")
        }
      }
    
      handleChange(field, e){         
          let fields2 = this.state.fields2;
          fields2[field] = e.target.value;        
          this.setState({fields2});
      }
          render() {
            
        
            const { email,password } = this.state;
            return (
                <form class="login" onSubmit= {this.contactSubmit.bind(this)}>
               
                <input
                  type="email"
                  name="email"
                  class="email"
                  value={email}
                  placeholder= "Email *"
                  onChange={this.handleChange.bind(this, "email")} value={this.state.fields2["email"]}/>
                         <span style={{color: "red" ,margiRight:5}}>{this.state.errors2["email"]}</span>
                         <br/>
                />
                <input
                  type="password"
                  name="password"
                  class="password"
                  value={password}
                  placeholder= "password *"
                  onChange={this.handleChange.bind(this, "password")} value={this.state.fields2["password"]}/>
                         <span style={{color: "red" ,margiRight:5}}>{this.state.errors2["password"]}</span>
                         <br/>
                />
                
                 <button class="send" type="submit">Login</button>
                 <p className="myStyle2">forgot password?</p>
              </form>
            );
          }
        }
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
    
