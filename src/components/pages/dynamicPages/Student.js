import React, { Component } from 'react'
import PropTypes from "prop-types"

class Student extends Component {
  state = {
    showInfo: false,
  };

  onClickHandle = ()=>{
      this.setState({ showInfo: !this.state.showInfo });
  };

  handleDeleteStudent = () => {
    this.props.handleDeleteStudent();
  };

  render() {
    const { showInfo } = this.state;
    const {id,name,email,phone} = this.props.student;
    return (
      <div className="card bg-info m-2 p-1">
        <h1 className="card-header h4 text-white text-center bg-default">
          <i className="fa fa-user mx-2" aria-hidden="true"></i>
          {name} 
          <i className="fa fa-sort-desc mx-1" aria-hidden="true" onClick={this.onClickHandle}></i>
 <i className="fa fa-times float-end" aria-hidden="true" onClick={this.handleDeleteStudent}></i>
</h1>

{showInfo ? (
<div className='card-body'>
        <ul className="list-group">
          <li className="list-group-item mb-1">
            <i className="fa fa-envelope mx-2" aria-hidden="true"></i>
            Email: {email}</li>
          <li className="list-group-item">
            <i className="fa fa-phone mx-2" aria-hidden="true"></i>
            Phone: {phone}
            </li>
        </ul>
      </div>
) : null}
      </div>
    )
  }
}

Student.defaultProps ={
  id: "not defined",
  name: "not defined",
  phone: "not defined",
  email: "not defined",
};

Student.propTypes ={
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default Student;