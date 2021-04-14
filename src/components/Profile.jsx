import React from 'react';
import Manik from '../images/Manik.jpg';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import InstagramIcon from '@material-ui/icons/Instagram';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const Profile = () => {
    return (
        <>
            <div className="container-fluid main">
                <div className="row">
                    <div className="col-12 col-sm-6">
                        <img className="img-fluid image" src={Manik} alt="profilepicture" />
                    </div>
                    <div className="col-12 col-sm-6">
                        <p className="text">I'm <span style={{ textDecoration: "underline" }}>Manik Kapoor</span></p>
                        <p className="sub-text" style={{ textAlign: "left", color:"#000" }}>A Passionate Web Developer trying to learn and implement new things.😄</p>
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
                <div className="row mt-3">
                    <div className="col-12 col-sm-2">
                        <p className="about" id="about">About Me :- </p>
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
                <div className="row mt-5">
                    <div className="col-12 col-sm-2">
                        <p className="about" id="education">My Skills :-</p>
                    </div>
                    <div className="col-12 col-sm-1 mt-2">
                        <ul className="skill-list">
                            <p>HTML</p>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-1 mt-2">
                        <ul className="skill-list">
                            <p>CSS</p>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-1 mt-2">
                        <ul className="skill-list">
                            <p>JS</p>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-1 mt-2">
                        <ul className="skill-list">
                            <p>Node Js</p>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-1 mt-2">
                        <ul className="skill-list">
                            <p>React Js</p>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-1 mt-2">
                        <ul className="skill-list">
                            <p>Express Js</p>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-1 mt-2">
                        <ul className="skill-list">
                            <p>MySQL</p>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-1 mt-2">
                        <ul className="skill-list">
                            <p>CPP</p>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-1 mt-2">
                        <ul className="skill-list">
                            <p>PHP</p>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-1 mt-2">
                        <ul className="skill-list">
                            <p>DS</p>
                        </ul>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12 col-sm-3">
                        <p className="about" id="work">Work Experience :-</p>
                    </div>
                    <div className="col-12 col-sm-9">
                        <div className="work">
                            <p className="workabout">Currently looking for internship. Till now not gained an appropiate work experience but had created 4 projects.</p>
                            <ul>
                                <li>
                                    <strong>Project 1 :- Weather Application</strong>
                                    <p>Description :- A single page responsive weather application build using React JS.</p>
                                    <p><a href="https://github.com/Manik9165/Weather_App.git" style={{color:"black"}}>Source</a></p>
                                    <hr className="line" />
                                </li>
                                <li>
                                    <strong>Project 2 :- React Website</strong>
                                    <p>Description :- A multipage responsive website build using React JS and bootstrap 4.6.</p>
                                    <p><a href="https://github.com/Manik9165/React_website.git" style={{color:"black"}}>Source</a></p>
                                    <hr className="line" />
                                </li>
                                <li>
                                    <strong>Project 3 :- Online Car Rental Application</strong>
                                    <p>Description :- A minor project based on online renting of cars using concepts of HTML, CSS, JS, PHP, MySQL</p>
                                    <hr className="line" />
                                </li>
                                <li>
                                    <strong>Project 4 :- Hostel Management System</strong>
                                    <p>Description :- A mini project describing complete hostel scenario build using File handling in C++. </p>
                                    <hr className="line" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12 col-sm-2">
                        <p className="about" id="hobbies">Hobbies :-</p>
                    </div>
                    <div className="col-12 col-sm-10">
                        <ul className="list">
                            <li>Chess</li>
                            <li>Badminton</li>
                            <li>Adventuring</li>
                        </ul>
                    </div>
                </div>
                <footer className="footer mt-5">
                    <div className="row mt-">
                        <div className="col-12 col-sm-2">
                            <p className="about">Contact :-</p>
                        </div>
                        <div className="col-3 col-sm-2 mt-2">
                            <a href="https://github.com/Manik9165"><span><GitHubIcon style={{color:"black"}}/></span></a>
                        </div>
                        <div className="col-3 col-sm-2 mt-2">
                            <a href="https://kapoormanik123@gmail.com"><span><MailIcon style={{color:"black"}}/></span></a>
                        </div>
                        <div className="col-3 col-sm-2 mt-2">
                            <a href="9165652282"><span><PhoneIcon style={{color:"black"}}/></span></a>
                        </div>
                        <div className="col-3 col-sm-2 mt-2">
                            <a href="https://www.instagram.com/manik_.10/"><span><InstagramIcon style={{color:"black"}}/></span></a>
                        </div>
                        <div className="col-3 col-sm-2 mt-2">
                            <a href="#" className="btn btn-sm btn-outline-dark" style={{borderRadius:"50%"}}><span><ExpandLessIcon/></span></a>
                        </div>
                    </div>
                    Made By Me @ManikKapoor.
                </footer>
            </div>
        </>
    )
}

export default Profile;
