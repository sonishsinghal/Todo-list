import React from 'react'
import PropTypes from 'prop-types'
import { Link} from "react-router-dom";

export default function Header(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
                <div className="container-fluid" >
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="/">Home</Link>
                                {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="#">Action</Link></li>
                                    <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                                </ul> */}
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/About" tabindex="-1" aria-disabled="true">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/contact" tabindex="-1" aria-disabled="true">Contact Us</Link>
                            </li>
                        </ul>
                        {props.searchbar?
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> :"no search bar"}
                    </div>
                </div>
            </nav>
        </>
    )
}

Header.propTypes ={
    title: PropTypes.string,
    searchbar: PropTypes.bool.isRequired
}
Header.defaultProps={
    title:"Todo list",
    searchbar: true
}

