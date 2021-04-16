import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import InstagramIcon from '@material-ui/icons/Instagram';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const Footer = () => {
    return (
        <>
            <footer className="footer mt-5">
                <div className="row mt-">
                    <div className="col-12 col-sm-2">
                        <p className="about">Contact :-</p>
                    </div>
                    <div className="col-3 col-sm-2 mt-2">
                        <a href="https://github.com/Manik9165"><span><GitHubIcon style={{ color: "black" }} /></span></a>
                    </div>
                    <div className="col-3 col-sm-2 mt-2">
                        <a href="https://kapoormanik123@gmail.com"><span><MailIcon style={{ color: "black" }} /></span></a>
                    </div>
                    <div className="col-3 col-sm-2 mt-2">
                        <a href="9165652282"><span><PhoneIcon style={{ color: "black" }} /></span></a>
                    </div>
                    <div className="col-3 col-sm-2 mt-2">
                        <a href="https://www.instagram.com/manik_.10/"><span><InstagramIcon style={{ color: "black" }} /></span></a>
                    </div>
                    <div className="col-3 col-sm-2 mt-2">
                        <a href="#" className="btn btn-sm btn-outline-dark" style={{ borderRadius: "50%" }}><span><ExpandLessIcon /></span></a>
                    </div>
                </div>
                Made By Me @ManikKapoor.
            </footer>
        </>
    )
}

export default Footer
