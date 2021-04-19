import React from 'react';
import axios from 'axios';
import Shake from 'react-reveal/Shake';

import './contact.scss';

;


class SubscribePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      thanksMassage: ''
    }
  }

  handleSubmit(e){ 
    e.preventDefault();
    axios({
      method: "POST", 
      url:"http://localhost:3002/send", 
      data:  this.state
    }).then((response)=>{ 
      if (response.data.status === 'success') {
       this.setState({thanksMassage: "Thank you for your message "})
        this.resetForm()
      } else if (response.data.status === 'fail') {
        this.setState({thanksMassage: "Something went wrong, please try again"})
      }
    })
  }

  resetForm(){
    this.setState({name: '', email: '', message: ''})
  }
  
  render() {
    return(
      <div className="newsletter-container">
       
      <h1>CONTACT</h1>
      <p> If you have any questions or comments, please feel free to contact me by leaving a message, don't forget to leave you're name and e-mail address so I can contact you back. Thank you! </p>
        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
          <div className="form-group">
              <label className='lable' htmlFor="name">Name</label>
              <input type="text" className="form-input" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} required/>
          </div>
          <div className="form-group">
              <label className='lable' htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-input" id="email" 
              aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} required pattern="([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,8})([.a-z]{2,8})?$"/>
          </div>
          <div className="form-group">
              <label className='lable' htmlFor="message">Message</label>
              <textarea className="form-input-text" rows="5" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} required/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
          <Shake spy={this.state.thanksMassage}>
          <h3 className='message-send'>{this.state.thanksMassage}</h3>
          </Shake>
        </form>
        
      </div>
    );
  }

  onNameChange(event) {
	  this.setState({name: event.target.value})
  }

  onEmailChange(event) {
	  this.setState({email: event.target.value})
  }

  onMessageChange(event) {
	  this.setState({message: event.target.value})
  }
}

export default SubscribePage;