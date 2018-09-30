import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import './Application.css';

import  image from './image .png';
import logo from './2018-09-22-23-22-04.jpg';

import './fill_detail.css';
var Dropdown = require('react-simple-dropdown');
//var createReactClass= require ('create-react-class');
class App3 extends Component {
  constructor(){
    super();
   
    this.state = {
          displayMenu: false,
        };
   
     this.showDropdownMenu = this.showDropdownMenu.bind(this);
     this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
   
   };
   
   showDropdownMenu(event) {
       event.preventDefault();
       this.setState({ displayMenu: true }, () => {
       document.addEventListener('click', this.hideDropdownMenu);
       });
     }
   
     hideDropdownMenu() {
       this.setState({ displayMenu: false }, () => {
         document.removeEventListener('click', this.hideDropdownMenu);
       });
   
     }
   
  render() {
    return (
      <div className="Appliction">
        <header className="Application-header">
          <img src={logo} className="Application-logo" alt="logo" />
          <img src={image} onClick={this.showDropdownMenu} className="Application-user" alt="user" />
          <h1 className="Application-greet">WELCOME</h1>
          <h1 className="Application-title">CONNECT</h1>
          <div  className="dropdown" style = {{width:"200px"}} >
          { this.state.displayMenu ? (
          <ul>
         <li>Change profile picture </li>
         <li>Update Account details </li>
         
         <li>Activity Logs</li>
         <li>Setting</li>
         <li>Log Out</li>
          </ul>
        ):
        (
          null
        )
        }

       </div>
        </header>
        
      </div>
    );
  }
}

class Fill_detail extends Component {
    constructor() {
        super();
        
        this.state = {
          fname: '',
          lname: '',
          email: '',
          phone:'',
          birthday:'',
          works_at:'',
          working_post:'',
          institute:'',
          gender:'',
          adress:'',
          fields:{},
          errors:{}
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
       if(!fields["lname"]){
        formIsValid = false;
        errors["lname"] = "Cannot be empty";
     }

     if(typeof fields["lname"] !== "undefined"){
        if(!fields["lname"].match(/^[a-zA-Z]+$/)){
           formIsValid = false;
           errors["lname"] = "Only letters";
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
      if(!fields["gender"]){
        formIsValid = false;
        errors["gender"] = "Cannot be empty";
      }
   this.setState({errors: errors});
       return formIsValid;
   }
  
   contactSubmit(e){
    e.preventDefault();

    if(this.handleValidation()){
       alert("Form submitted.Thanks for your details we will setup your profile...");
    }else{
       alert("Form has errors.please check")
    }
  }
  

  handleChange(field, e){         
      let fields = this.state.fields;
      fields[field] = e.target.value;        
      this.setState({fields});
  }
   render()
   {
        var myStyle2 = {
          fontSize: 30,
          color:"white"
     }
        const { fname, lname, email,phone,birthday,works_at,working_post,institute,gender,adress } = this.state;
        return (
          <div className="box">
            <h2 style={myStyle2}>YOUR DETAILS PLEASE...</h2>
          <form class="fill_details" onSubmit= {this.contactSubmit.bind(this)}>
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
              placeholder= "Last Name *" 
              value={lname}
              onChange={this.handleChange.bind(this, "lname")} value={this.state.fields["lname"]}/>
                          <span style={{color: "red"}}>{this.state.errors["lname"]}</span>
            />
            <input
              type="text"
              name="email"
              class="email"
              value={email}
              placeholder= "Email *"
              onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}/>
                          <span style={{color: "red"}}>{this.state.errors["email"]}</span>
            />
            <input
              type="text"
              name="gender"
              class="gender"
              value={gender}
              placeholder= "Gender *"
              onChange={this.handleChange.bind(this, "gender")} value={this.state.fields["gender"]}/>
                          <span style={{color: "red"}}>{this.state.errors["gender"]}</span>
            />
            <input
              type="text"
              name="phone"
              class="phone"
              value={phone}
              placeholder= "Phone no"
              onChange={this.handleChange.bind(this, "phone")} value={this.state.fields["phone"]}/>
            />
            <input
              type="text"
              name="birthday"
              class="birthday"
              value={birthday}
              placeholder= "Birthday (dd/mm/yyyy)"
              onChange={this.handleChange.bind(this, "birthday")} value={this.state.fields["birthday"]}/>
            />

            <input
              type="text"
              name="adress"
              class="lives_in"
              value={adress}
              placeholder= "Address *"
              onChange={this.handleChange.bind(this, "gender")} value={this.state.fields["gender"]}/>
            />
            <input
              type="text"
              name="works_at"
              class="works_at"
              value={works_at}
              placeholder= "Current working company "
              onChange={this.handleChange.bind(this, "works_at")} value={this.state.fields["works_at"]}/>
            />
            <input
              type="text"
              name="institute"
              class="Institute_studied"
              value={institute}
              placeholder= "Educated from "
              onChange={this.handleChange.bind(this, "institute")} value={this.state.fields["institute"]}/>
            />
            <input
              type="text"
              name="working_post"
              class="post_of_work"
              value={working_post}
              placeholder= "Working post "
              onChange={this.handleChange.bind(this, "working_post")} value={this.state.fields["working_post"]}/>
            />
            
            
            
             <button class="send" type="submit">Submit Records</button>
          </form>
          </div>
        );
      }
    }
    class App extends React.Component {
        render() {
           return (
              <div>
                 <App3/>
                 <Fill_detail/>
                 
                 
              </div>
           );
        }
      }
      export default App;