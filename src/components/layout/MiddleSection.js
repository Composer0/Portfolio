import React from "react";
// import Skills from "../Objects/ObjectsSkills";
// import SHOWSKILLS from "../SkillIcons";

function MiddleSection(props) {
    return (
        <div>
             {/* <div className="middle-section" >
                <div className="separator">

                    <div className="skill-row" id="technology">
                        <h3 className="technology" >Technologies</h3>
                        <div className="skill-container">
                        {Skills.map(SHOWSKILLS)}
                    </div>
                </div>
            </div> */}
            <hr />
            <div className="my-skills" id="about" >
                <h3>About Me</h3>
                {/* <h3 className="educ">Education Career</h3> */}
                <p className="education-description">
                {/* I am a fullstack developer who enjoys learning and solving problems. With programming, the act of developing new software and customizing their looks and feel fuels my creative needs on a daily basis.
                <br/>    
                <br/>
                Since beginning my journey into software development I have learned and found ways to implement a variety of technologies and version control including, but not limited to: <br/> <br/>
                Javascript, C#, .Net, React, HTML, CSS, WordPress, Bootstrap, Tailwind, Sass, API, Node, Express, MongoDB, Git, Postman, Railway, Azure, and more.
                <br/><br/>
                I love the idea that with technology, my potential to impact others is simply greater and I want to use my knowledge to craft intuitive products that will aid people with their needs. */}
                I am a passionate and creative full-stack developer with a strong love for learning and problem-solving. Programming allows me to continuously expand my knowledge while satisfying my creative needs through developing new software and customizing their look and feel.
                <br/><br/>
                Throughout my software development journey, I have gained proficiency in a wide range of technologies and version control systems. Some of my key skills include:
                <br/><br/>
                JavaScript - C# - .NET - React - PHP - HTML - CSS - WordPress - Bootstrap - Tailwind - Sass - API development - Node.js - Express.js - MongoDB - Git - Postman - Railway - Azure - and MORE!
                <br/><br/>
                What excites me the most about technology is its immense potential to impact people's lives in meaningful ways. I am driven by the opportunity to utilize my knowledge and skills to craft intuitive and user-friendly products that address real-world needs. It is my goal to create solutions that not only meet user requirements but also enhance their overall experience.
                <br/><br/>
                {/* I thrive in dynamic environments where I can collaborate with talented individuals to push the boundaries of what is possible. I am constantly seeking new challenges and strive to stay up-to-date with the latest industry trends and best practices.
                <br/><br/>
                I am excited to contribute my expertise and make a positive impact in the field of software development by leveraging technology to create innovative solutions that truly benefit others. */}
                </p>
            </div>
            
        {/* </div> */}
        <hr className="hrMarginTop"/>
        </div>
    );
}

export default MiddleSection;