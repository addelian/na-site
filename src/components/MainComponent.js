import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import About from './AboutComponent';
import Projects from './ProjectsComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route exact path='/about'>
                        <About />
                    </Route>
                    <Route exact path='/projects'>
                        <Projects />
                    </Route>
                    <Route exact path='/contact'>
                        <Contact />
                    </Route>
                    <Redirect to='/' />
                </Switch>
                <Footer />
            </React.Fragment>
        )
    }
}

export default Main;