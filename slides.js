//import React from 'react';
import ReactDOM from 'react-dom';
import React, { Component,View } from 'react';
import './Application2.css';
import { Redirect } from 'react-router-dom'
import logo from './2018-09-22-23-22-04.jpg';
//import image1 from './2018-09-23-12-27-19.xcf';
import './slide.css'
var hasOwn = {}.hasOwnProperty;

function classNames () {
  var classes = '';

  for (var i = 0; i < arguments.length; i++) {
    var arg = arguments[i];
    if (!arg) continue;

    var argType = typeof arg;

    if (argType === 'string' || argType === 'number') {
      classes += ' ' + arg;
    } else if (Array.isArray(arg)) {
      classes += ' ' + classNames.apply(null, arg);
    } else if (argType === 'object') {
      for (var key in arg) {
        if (hasOwn.call(arg, key) && arg[key]) {
          classes += ' ' + key;
        }
      }
    }
  }

  return classes.substr(1);
}

class SlideShow extends React.Component {
  constructor() {
    super()
    this.state = { activeIndex: 0 };
  }
  jumpToSlide(index) {
    this.setState({ activeIndex: index });
  }
  render() {
    return (
      <div className="slideshow">
        <ul className="slideshow-slides">
          {
            this.props.slides.map((slide, index) => (
              <li className={ classNames({ active: index == this.state.activeIndex }) }>
                <figure>
                  <img src={ slide.imageUrl } />
                  { slide.caption ? <figcaption>{ slide.caption }</figcaption> : null }
                </figure>
              </li>
            ))
          }
        </ul>
        <ul className="slideshow-dots">
          {
            this.props.slides.map((slide, index) => (
              <li className={ (index == this.state.activeIndex) ? 'active': '' }>
                <a onClick={ (event)=> this.jumpToSlide(index) }>{ index + 1 }</a>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

let _slides = [{
  imageUrl: "http://typingservice.in/images/trial/image1.jpg",
  caption: "CONNECTING PEOPLE"
}, {
  imageUrl: "http://typingservice.in/images/trial/image2.jpg",
  caption: "SHARING IDEAS AND DREAMS"
}];
class Content extends React.Component {
  render() {
    var myStyle1 = {
      fontSize: 40,
      margin: 50,
      color: '#fff',
    }
    var myStyle2 = {
        fontSize: 20,
        margin: 90,
        color: '#fff',  
   }
   var myStyle3 = {
    fontSize: 20,
     marginLeft:90,
    marginTop:10,
    color: '#fff', 
   }
     return (

        <div>
           <h2 style = {myStyle1}>What is CONNECT?</h2>
           <p style ={myStyle2}>CONNECT is a free social networking website that allows registered users to create profiles, upload photos and video, send messages and keep in touch with friends, family and colleagues.
           It is a live project under development aiming to bridge the gap between people in different parts of this world with similar dreams and tastes.It looks up to offer:</p>
           <ul style={myStyle3}>1.Marketplace - allows members to post, read and respond to classified ads.</ul>
           <ul style={myStyle3}>2.Groups - allows members who have common interests to find each other and interact.</ul>
           <ul style={myStyle3}>3.Events  - allows members to publicize an event, invite guests and track who plans to attend.</ul>
           <ul style={myStyle3}>4.Pages - allows members to create and promote a public page built around a specific topic.</ul>
           <ul style={myStyle3}>5.Presence technology - allows members to see which contacts are online and chat.</ul>
        </div>
     );
  }
}
class App2 extends React.Component {
  render() {
    return <SlideShow slides={ _slides } />
      
  } 
}
class App3 extends React.Component {
  state = {
    redirect: false
  }
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/localhost:3001/' />
    }
  }
  render() {
   
    
    var buttonStyle = {
      marginTop:30,
      marginRight:30,
      color:'black',
      fontSize:20,
      float: 'right',
     
      hieght:20,
      fontWeight:'bold',
      backgroundColor:'	#7CFC00	'

    };
    
    
    
 
    return (
      <div className="Appliction">
          
          <header className="Application-header">
          <img src={logo} className="Application-logo" alt="logo" />
          <button style={buttonStyle}
        onClick={this.setRedirect}>LOGIN/SIGN-UP</button>
         
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
           <App2/>
           <Content/>
           
        </div>
     );
  }
}

var root = document.querySelector('#root');
ReactDOM.render(<App />, root)
export default App;
