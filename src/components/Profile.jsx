import React from 'react';
import Footer from './Footer';
import Hobbies from './Hobbies';
import Work from './Work';
import Skill from './Skill';
import About from './About';
import Pic from './Pic';

const Profile = () => {
    return (
        <>
            <div className="container-fluid main">
                <Pic/>
                <About/>
                <Skill/>
                <Work/>
                <Hobbies/>
                <Footer/>
            </div>
        </>
    )
}

export default Profile;
