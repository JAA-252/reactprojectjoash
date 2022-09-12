import React, { Component } from 'react';
import HeaderLinkAtom from '../atoms/Links/HeaderLinkAtom';

class RegisterFormLinksMolecule extends Component {
  render() {
    return (
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <HeaderLinkAtom 
          classNameString="nav-link active"
          ariaCurrentString="page"
          toString="/"
          iconClassNameString="fa fa-home mx-1"
          ariaHiddenString="true"
          linkTextString="Home"
        />
        </li>
        <li className="nav-item">
        <HeaderLinkAtom 
          classNameString="nav-link"
          ariaCurrentString=""
          toString="/students/add"
          iconClassNameString="fa fa-plus mx-1"
          ariaHiddenString="true"
          linkTextString="Register"
        />
        </li>
        <li className="nav-item">
        <HeaderLinkAtom 
          classNameString="nav-link"
          ariaCurrentString="page"
          toString="/about"
          iconClassNameString="fa fa-question mx-1"
          ariaHiddenString="true"
          linkTextString="About"
        />
        </li>
      </ul>
    )
  }
}
export default RegisterFormLinksMolecule;