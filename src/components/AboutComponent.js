import React from 'react';
import Image from 'react-bootstrap/Image'

function About(props) {
    return (
        <div className="container bio">
            <div className="row">
                <div className="col-md-3 center">
                    <br/><h1>Hi, there!</h1><br/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3 center">
                    <Image fluid roundedCircle src={require('../images/Nic.jpeg')} alt="Nic" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-8 center bio"><br/>
                    <p>
                        I'm Nic. I'm a software engineer based in the midwest.
                    </p>
                    <p>
                        While I'm most comfortable with JavaScript programming, primarily React, I'm continuing to learn 
                        more each and every day.
                    </p>
                    <p>
                        I'm well-versed in the MERN stack
                        and continue to develop my full-stack capabilities as a contractor.
                        Current explorations include Terraform HCL "infrastructure-as-code," Docker, Python, Java, and the
                        Amazon Web Services suite of products.
                    </p>
                    <p>
                        I'm currently seeking a full-time position at a creative, technology-driven organization
                        in an environment that encourages both innovative thinking and continued career development.
                    </p>
                    <p>
                        When I'm not coding, you can find me reading, cooking, or rehearsing and writing music for 
                        my jazz trio, <a href="https://www.youtube.com/channel/UCe2l9AUMPhsN2Rr8dSh6gBg">Shevelia</a>.
                        Otherwise, I'm out spending quality time with my wife and our two awesome dogs,&nbsp;
                        <a href="https://www.instagram.com/vicandtheo/?hl=en">Victor and Theo</a>.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;