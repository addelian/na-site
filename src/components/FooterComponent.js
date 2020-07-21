import React from 'react';

function Footer(props) {

    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-md mb-3 text-center">
                        <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/nic-addelia-968347191/"><i className="fa fa-linkedin" /></a>{' '}
                        <a className="btn btn-social-icon btn-github" href="https://github.com/addelian"><i className="fa fa-github" /></a>{' '}
                        <br/><br/>
                        <h6>Created in React.js. 2020.</h6>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;