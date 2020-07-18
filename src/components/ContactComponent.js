import React from 'react';
import { Link } from 'react-router-dom';

function Contact(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 text-center">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/about'>About Me</Link></li>
                    <li><Link to='/projects'>My Projects</Link></li>
                    <li><Link to='/contact'>Contact Me</Link></li>
                    </ul>
                </div>
                <div className="col-md-6 text-center">
                    <a role="button" className="btn btn-link" href="tel:+15639400970"><i className="fa fa-phone" /> +1 (563) 940-0970</a><br />
                    <a role="button" className="btn btn-link" href="mailto:addelia.nicolas@gmail.com"><i className="fa fa-envelope-o" /> addelia.nicolas@gmail.com</a>
                </div>
            </div>
        </div>
    )
}

export default Contact;