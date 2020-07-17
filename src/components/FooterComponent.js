import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {

    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 text-center">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/about'>About Me</Link></li>
                    <li><Link to='/projects'>My Projects</Link></li>
                    <li><Link to='/contact'>Contact Me</Link></li>
                    </ul>
                    </div>
                    <div className="col-md-4 mb-3 text-center">
                        <h5>Social</h5>
                        <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/nic-addelia-968347191/"><i className="fa fa-linkedin" /></a>{' '}
                        <a className="btn btn-social-icon btn-github" href="https://github.com/addelian"><i className="fa fa-github" /></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="https://www.youtube.com/channel/UCe2l9AUMPhsN2Rr8dSh6gBg"><i className="fa fa-youtube" /></a> 
                    </div>
                    <div className="col-md-4 text-center">
                        <a role="button" className="btn btn-link" href="tel:+15639400970"><i className="fa fa-phone" /> +1 (563) 940-0970</a><br />
                        <a role="button" className="btn btn-link" href="mailto:addelia.nicolas@gmail.com"><i className="fa fa-envelope-o" /> addelia.nicolas@gmail.com</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;