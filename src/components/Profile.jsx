import React from 'react';
import Manik from '../images/Manik.jpg';

const Profile = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-sm-6">
                        <img className="img-fluid image" src={Manik} alt="profilepicture" />
                    </div>
                    <div className="col-12 col-sm-6">
                        <p className="text">I'm <span style={{ textDecoration: "underline" }}>Manik Kapoor</span></p>
                        <p className="sub-text" style={{ textAlign: "left" }}>A Passionate Web Developer trying to learn and implement new things.😄</p>
                        <div className="row">
                            <div className="col-4 col-sm-2 m-1">
                                <button className="btn btn-outline-info">About Me</button>
                            </div>
                            <div className="col-3 col-sm-2 m-1">
                                <button className="btn btn-outline-info">Education</button>
                            </div>
                            <div className="col-5 col-sm-3 m-1">
                                <button className="btn btn-outline-info">Work Experience</button>
                            </div>
                            <div className="col-3 col-sm-2 m-1">
                                <button className="btn btn-outline-info">Hobbies</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-2">
                        <p className="about">About Me :- </p>
                    </div>
                    <div className="col-12 col-sm-10">
                        <ul className="list">
                            <li>An Enthusiastic learner looking for opportunity to rise and prove myself.</li>
                            <li>Currently in 3 <sup>rd</sup> year of Bachelors of Technology in Computer Science Engineering.</li>
                            <li>Will able to do Paid Free Lance works. </li>
                            <li>Contact :- 9165652282</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;
