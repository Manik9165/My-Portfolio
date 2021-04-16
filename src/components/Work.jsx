import React from 'react'

const Work = () => {
    return (
        <>
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
                                <p><a href="https://github.com/Manik9165/Weather_App.git" style={{ color: "black" }}>Source</a></p>
                                <hr className="line" />
                            </li>
                            <li>
                                <strong>Project 2 :- React Website</strong>
                                <p>Description :- A multipage responsive website build using React JS and bootstrap 4.6.</p>
                                <p><a href="https://github.com/Manik9165/React_website.git" style={{ color: "black" }}>Source</a></p>
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
        </>
    )
}

export default Work
