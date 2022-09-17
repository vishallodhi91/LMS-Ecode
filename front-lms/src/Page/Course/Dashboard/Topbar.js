import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Topbar = ({course_slug}) => {
    return (
        <nav className="site-navbar navbar navbar-default navbar-fixed-top navbar-mega navbar-expand-lg" role="navigation">
            <div className="navbar-header">
                <button type="button" className="navbar-toggler hamburger hamburger-close navbar-toggler-left hided" data-toggle="menubar">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="hamburger-bar"></span>
                </button>
                <div style = {{marginLeft : "10px"}} >
                <a  href="/" role="button">
                    <img style = {{width: "200px", height: "50px"}} className="navbar-brand-logo" src="/frontend/img/classroom.png"title="" />
                    </a>
                </div>
            </div>

            <div className="navbar-container container-fluid">
                <div className="collapse navbar-collapse navbar-collapse-toolbar" id="site-navbar-collapse">
                    <ul className="nav navbar-toolbar">
                        <li className="nav-item hidden-float" id="toggleMenubar">
                            <a className="nav-link" data-toggle="menubar" href={"/learn/"+course_slug} role="button">
                            <FontAwesomeIcon icon="arrow-left" /> &nbsp;Back to course
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Topbar