import React, { Component } from 'react'
import uuid from 'react-uuid';
import RegisterFormInputMolecule from '../../molecules/RegisterFormInputMolecule';

class AddStudent extends Component {
    state = {
        name:"",
        email:"",
        phone:"", 
        errors: {},
    };

  onHandleChange = (e)=>{
    this.setState({ [e.target.name]: e.target.value })
  };

  onHandleSubmit = (e) =>{
    e.preventDefault();
    const { name,email,phone } = this.state;

    if(name === ""){
        this.setState({errors:{name: "Name required"}})
        return;
    }

    if(email === ""){
        this.setState({errors:{email: "Email required"}})
        return;
    }

    if(phone === ""){
        this.setState({errors:{phone: "Phone required"}})
        return;
    }

    const newStudent = { id: uuid(), name: { name }, phone: { phone }, email: { email } }
    console.log(newStudent);

    this.setState({ name: "", email: "", phone: ""});

  }

  render() {
    const {name,email,phone, errors} = this.state;
    return (
        <div className="card">
        <div className="card-header text-center"><h1>Student Registration</h1></div>
        <div className="card-body">
            <form onSubmit={this.onHandleSubmit}>
            <div className="mb-2">
                <RegisterFormInputMolecule 
                label="Name" 
                name="name" 
                placeholder="Please enter your name."
                value={name}
                onChange={this.onHandleChange}
                error={errors.name}
                type="text"
                />
            </div>
            <div className="mb-2">
                <RegisterFormInputMolecule 
                label="Email" 
                name="email" 
                placeholder="Please enter your email."
                value={email}
                onChange={this.onHandleChange}
                error={errors.email}
                type="email"
                />
            </div>
            <div className="mb-2">
                <RegisterFormInputMolecule 
                label="Phone" 
                name="phone" 
                placeholder="Please enter your phone."
                value={phone}
                onChange={this.onHandleChange}
                error={errors.phone}
                />
            </div>
            <input type="submit" value="register" className="btn btn-outline-primary float-end"/>
            </form>
        </div>
        </div>
    )
  }
}
export default AddStudent;
