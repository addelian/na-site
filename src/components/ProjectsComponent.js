import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
import { Card } from 'reactstrap';
import Image from 'react-bootstrap/Image';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFlipped1: false,
            isFlipped2: false,
            isFlipped3: false,
            isFlipped4: false
        };
        this.handleHover1 = this.handleHover1.bind(this);
        this.handleHover2 = this.handleHover2.bind(this);
        this.handleHover3 = this.handleHover3.bind(this);
        this.handleHover4 = this.handleHover4.bind(this);
    }

    handleHover1(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped1: !prevState.isFlipped1}));
    }

    handleHover2(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped2: !prevState.isFlipped2}));
    }

    handleHover3(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped3: !prevState.isFlipped3}));
    }

    handleHover4(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped4: !prevState.isFlipped4}));
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-auto cardDiv" onMouseEnter= {this.handleHover1} onMouseLeave ={this.handleHover1}>
                             {/* https://github.com/AaronCCWong/react-card-flip */}
                            <ReactCardFlip isFlipped={this.state.isFlipped1} flipDirection="vertical">
                                <Card className="nic-back">
                                    <div className="pic-space">
                                        Project 1
                                    </div>
                                </Card>
                                <Card className="nic-back">
                                    <div className="flip-info">
                                        This is more information about the project.
                                        <p>I used code on this.</p>
                                        <p>I learned a lot doing it.</p>
                                        <a href="#">Link here.</a>
                                    </div>
                                </Card>
                            </ReactCardFlip> 
                        </div>
                        <div className="col-md-6 cardDiv" onMouseEnter= {this.handleHover2} onMouseLeave ={this.handleHover2}>
                            <ReactCardFlip isFlipped={this.state.isFlipped2} flipDirection="vertical">
                                <Card>
                                    <div>
                                        This is the front of the card!
                                    </div>
                                </Card>
                                <Card>
                                    <div>
                                        This is the back of the card!
                                    </div>
                                </Card>
                            </ReactCardFlip> 
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 cardDiv" onMouseEnter= {this.handleHover3} onMouseLeave ={this.handleHover3}>
                            <ReactCardFlip isFlipped={this.state.isFlipped3} flipDirection="vertical">
                                <Card>
                                    <div>
                                        This is the front of the card!
                                    </div>
                                </Card>
                                <Card>
                                    <div>
                                        This is the back of the card!
                                    </div>
                                </Card>
                            </ReactCardFlip> 
                        </div>
                        <div className="col-md-6 cardDiv" onMouseEnter= {this.handleHover4} onMouseLeave ={this.handleHover4}>
                            <ReactCardFlip isFlipped={this.state.isFlipped4} flipDirection="vertical">
                                <Card>
                                    <div>
                                        This is the front of the card!
                                    </div>
                                </Card>
                                <Card>
                                    <div>
                                        This is the back of the card!
                                    </div>
                                </Card>
                            </ReactCardFlip> 
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Projects;