import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
export default function Navbar(props) {


  return (
    <>
    <div className="container-fluid px-0">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 border-bottom" style={props.mode}>
          <Link to="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0  text-decoration-none px-2" style={props.mode}>
           {props.title}
          </Link>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><Link to="/" className="nav-link px-2 " style={{color:props.mode.backgroundColor==='white'?'black':'#FFC745'}} >Home</Link></li>
            <li><Link to="/about" className="nav-link px-2" style={{color:props.mode.backgroundColor==='white'?'black':'#FFC745'}}>{props.about}</Link></li>
          </ul>

          <div className="col-md-3 text-end">
            <button type="button" className="btn " onClick={props.toggle} >{props.buttonicon}</button>
          </div>
        </header>
      </div>
    </>
  )
}
Navbar.prototype={
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
}
Navbar.defaultProps = {
    title:'set tilte here',
    about:'About text'
};