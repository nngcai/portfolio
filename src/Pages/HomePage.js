import React from 'react';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am 
                    <span> Ntsikelelo Camagu Ngcai.</span>
                </h1>
                <p className="h-sub-text">
                    I am an aspiring Software Engineer and self-taught Web Developer
                    looking to enhance and improve my skills in the ever changing field
                    of tech. Feel free to explore this little world of mine and see what
                    I've been up to. Enjoy.
                </p>
                <div className="icons">
                    <Link to={{pathname: "https://www.linkedin.com/in/ntsikelelo-ngcai-37ba781b5/"}} target="_blank" className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedin} className="icon fb" />
                    </Link>
                    <Link to={{pathname: "https://github.com/nngcai"}} target="_blank" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default HomePage;
