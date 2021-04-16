import React from 'react';
import Manik from '../images/Manik.jpg';

const Pic = () => {
    return (
        <>
            <div className="row">
                <div className="col-12 col-sm-6">
                    <img className="img-fluid image" src={Manik} alt="profilepicture" />
                </div>
                <div className="col-12 col-sm-6">
                    <p className="text">I'm <span style={{ textDecoration: "underline" }}>Manik Kapoor</span></p>
                    <p className="sub-text" style={{ textAlign: "left", color: "#000" }}>A Passionate Web Developer trying to learn and implement new things.😄</p>
                    <div className="row">
                        <div className="col-4 col-sm-2 m-1">
                            <a href="#about" className="btn btn-outline-dark">About Me</a>
                        </div>
                        <div className="col-3 col-sm-2 m-1">
                            <a href="#education" className="btn btn-outline-dark">My Skills</a>
                        </div>
                        <div className="col-5 col-sm-3 m-1">
                            <a href="#work" className="btn btn-outline-dark">Work Experience</a>
                        </div>
                        <div className="col-3 col-sm-2 m-1">
                            <a href="#hobbies" className="btn btn-outline-dark">Hobbies</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pic
