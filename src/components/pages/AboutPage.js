import BackgroundVideo from "../layout/BackgroundVideo";
import React from "react";
import Footer from "../layout/Footer";

function MiddleSection(props) {
    return (
        <div>
        <BackgroundVideo/>

            <div className="my-skills" id="about" >
                <h3>About Me</h3>
                <p className="education-description">
                I am a fullstack developer who enjoys learning and solving problems. With programming, the act of developing new software and customizing their looks and feel fuels my creative needs on a daily basis. 
                <br/>
                <br/>
                Since beginning my journey into software development I have learned and found ways to implement a variety of technologies and version control including, but not limited to: 
                <br/>
                <br/>
                Javascript, C#, .Net, React, HTML, CSS, Bootstrap, Tailwind, Sass, API, Node, Express, MongoDB, Git, Postman, Railway, Azure, and more. 
                <br/>
                <br/>
                I love the idea that with technology, my potential to impact others is simply greater and I want to use my knowledge to craft intuitive products that will aid people with their needs.
                </p>
            </div>
            <Footer className="aboutFooter" />
        </div>
    );
}

export default MiddleSection;