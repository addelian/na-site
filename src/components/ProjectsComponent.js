import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
import { Card } from 'react-bootstrap';

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
                <div className="card-flex">
                        <div onMouseEnter= {this.handleHover1} onMouseLeave ={this.handleHover1}>
                             {/* https://github.com/AaronCCWong/react-card-flip */}
                            <ReactCardFlip isFlipped={this.state.isFlipped1} flipDirection="horizontal">
                                <Card className="nic-back tile-card">
                                    <div className="flip-info">
                                        <h1>Bootstrap Portfolio</h1>
                                    </div>
                                </Card>
                                <Card className="tile-card">
                                    <img className="code-icon flip-info" src={require("../images/vscode.png")}/><br/>
                                    <div className="flip-info">
                                        My original developer portfolio site.
                                        <p>Built primarily in HTML / CSS / JavaScript, using Bootstrap 4.</p>
                                        <a href="https://github.com/addelian/na-percussion">GitHub Repo</a>
                                    </div>
                                </Card>
                            </ReactCardFlip> 
                        </div>
                        <div onMouseEnter= {this.handleHover2} onMouseLeave ={this.handleHover2}>
                            <ReactCardFlip isFlipped={this.state.isFlipped2} flipDirection="horizontal">
                                <Card className="yell-back tile-card">
                                    <div className="flip-info">
                                        <h1 style={{"margin-left": 10}}>Artist Site - Responsive</h1>
                                    </div>
                                </Card>
                                <Card className="tile-card">
                                    <div className="flip-info">
                                        This is more information about the project.
                                        <p>I used code on this.</p>
                                        <p>I learned a lot doing it.</p>
                                        <a href="#">Link here.</a>
                                    </div>
                                </Card>
                            </ReactCardFlip> 
                        </div>
                        <div onMouseEnter= {this.handleHover3} onMouseLeave ={this.handleHover3} className>
                            <ReactCardFlip isFlipped={this.state.isFlipped3} flipDirection="horizontal">
                                <Card className="hazy-back tile-card">
                                    <div className="flip-info">
                                        <h1 style={{"margin-left": 10}}>Artist Site - Mobile</h1>
                                    </div>
                                </Card>
                                <Card className="tile-card">
                                    <div className="flip-info">
                                        This is more information about the project.
                                        <p>I used code on this.</p>
                                        <p>I learned a lot doing it.</p>
                                        <a href="#">Link here.</a>
                                    </div>
                                </Card>
                            </ReactCardFlip> 
                        </div>
                        <div onMouseEnter= {this.handleHover4} onMouseLeave ={this.handleHover4}>
                            <ReactCardFlip isFlipped={this.state.isFlipped4} flipDirection="horizontal">
                                <Card className="drums-back tile-card">
                                    <div className="flip-info">
                                        <h1 style={{"margin-left": 10}}>Node Backend</h1>
                                    </div>
                                </Card>
                                <Card className="tile-card">
                                    <div className="flip-info">
                                        This is more information about the project.
                                        <p>I used code on this.</p>
                                        <p>I learned a lot doing it.</p>
                                        <a href="#">Link here.</a>
                                    </div>
                                </Card>
                            </ReactCardFlip> 
                        </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Projects;