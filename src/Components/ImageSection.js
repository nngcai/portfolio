import React from 'react';
import about from '../img/about.jpg';
import {Link} from 'react-router-dom';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4>I am<span> Ntsikelelo Camagu Ngcai</span></h4>
                <p className="about-text">
                I am an aspiring Software Engineer and self-taught Web Developer
                    looking to enhance and improve my skills in the ever changing field
                    of tech.
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                    </div>
                    <div className="right-section">
                        <p>: Ntsikelelo Camagu Ngcai</p>
                        <p>: 25</p>
                        <p>: South African</p>
                        <p>: Xhosa, English</p>
                        <p>: 141 Sithole Street, Dobsonville, Soweto, Johannesburg</p>
                    </div>
                </div>
                <Link to={{pathname: "https://drive.google.com/file/d/1Y33xTf7firBwvooUYyHXjGRAkwP0I8cJ/view?usp=sharing"}} target="_blank"><button className="btn">Download Cv</button></Link>
            </div>
        </div>
    )
}

export default ImageSection;
