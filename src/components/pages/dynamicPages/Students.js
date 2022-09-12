import React, { Component } from 'react'
import uuid from "react-uuid"
import Student from './Student';

class Students extends Component {
    state = {
        students: [
            {
                id: uuid(),
                name: "Jude",
                email: "jude@msn.com",
                phone: "333333333",
            },
            {
                id: uuid(),
                name: "Sean",
                email: "sean@msn.com",
                phone: "333333333",
            },
            {
                id: uuid(),
                name: "Joey",
                email: "joey@msn.com",
                phone: "333333333",
            },
            {
                id: uuid(),
                name: "Terry",
                email: "terry@msn.com",
                phone: "333333333",
            },
        ],
    };

deleteStudent = (id) => {
    const { students } = this.state;
    const newStudents = students.filter(student => student.id !== id);
    this.setState({ students: newStudents });
};
render() {
    const {students} = this.state;
    return (
        <div style={{marginBottom: "40px"}}>
            <h1 style={{textAlign: "center", marginBottom: "40px"}}>Student List</h1>
        {students.map((student) => (
            <Student key={student.id} student={student} handleDeleteStudent={this.deleteStudent.bind(this, student.id)}/>
        ))}
        </div>
    );
}}
export default Students;