import React, { Component } from 'react';
import RegisterFormSearchInputAtom from '../atoms/Input/RegisterFormSearchInputAtom';
import RegisterFormSearchButtonAtom from '../atoms/Button/RegisterFormSearchButtonAtom';

class RegisterFormSearchMolecule extends Component {
  render() {
    return (
      <div>
        <form className="d-flex" role="search">
          <RegisterFormSearchInputAtom />
          <RegisterFormSearchButtonAtom />
        </form>
      </div>
    )
  }
}
export default RegisterFormSearchMolecule;