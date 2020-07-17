import React, { useState } from 'react';
import {
    Collapse,
    Container,
    Jumbotron,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
  } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Header = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

        return (
            <React.Fragment>
                <Jumbotron style={{'background-color': '#03719C', 'color': 'white'}} fluid className="mb-0">
                    <Container fluid>
                        <h1 className="name display-1">Nic Addelia</h1>
                        <p>"The only proof he needed for the existence of God was <span className="lead"><em>music.</em></span>" - <em>Kurt Vonnegut</em></p>
                    </Container>
                </Jumbotron>
                    <Navbar sticky light expand="md" id="header-nav">
                        <NavbarBrand href="/" className="name"><strong>N.A.</strong></NavbarBrand>
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/">
                                        <i className="fa fa-home fa-lg" /> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/About">
                                        <i className="fa fa-music fa-lg" /> About
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/projects">
                                        <i className="fa fa-file fa-lg" /> Projects
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contact">
                                        <i className="fa fa-file fa-lg" /> Contact
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
            </React.Fragment>
        );
}

export default Header;