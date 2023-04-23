import React from "react";
import { FaBars } from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLink, NavResume} from "./NavbarElements"
// import {Pdf} from "../../../assets/resume/OrionPalmer-CV.docx"
// import {Pdf} from "https://www.orionpalmer.com/resume/OrionPalmer-CV.pdf"
import profileConstellation from "../../../assets/img/Constellation.webp"
import {animateScroll as scroll} from "react-scroll"
// import {Link} from 'react-router-dom'


const Navbar = ({toggle}) => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <>
            <Nav> 
            
                <NavbarContainer>
                    <NavLogo onClick={toggleHome} to="top-container"><img src={profileConstellation} width="50px" alt="logo"/>
                    </NavLogo>
                    <MobileIcon 
                    onClick={toggle}
                    >
                        <FaBars></FaBars>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLink to="/"
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact="true" 
                            offset={-90}
                            activeClass="active"
                            onClick={toggleHome}
                            >Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="portfolio"
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact="true" 
                            offset={-90}
                            activeClass="active"
                            // onClick={toggleHome}
                            >Projects</NavLink>
                        </NavItem>
                        {/* <NavItem>
                            <NavLink to="/tech"
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact="true" 
                            offset={-90}
                            onClick={toggleHome}
                            >Tech</NavLink>
                        </NavItem> */}
                        <NavItem>
                            <NavLink 
                            to="about" 
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact="true" 
                            offset={-90}
                            activeClass="active"
                            // onClick={toggleHome}
                            >About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="contact-me"
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact="true" 
                            offset={-90}
                            activeClass="active"
                            // onClick={toggleHome}
                            >Contact</NavLink>
                        </NavItem>
                        <NavItem>
                             <a class="navLink"
                             
                             rel="noopener noreferrer" target="_blank"
                            href="https://creators-blog.netlify.app/">
                            Blog
                            </a>
                            
                        </NavItem>
                    </NavMenu>
                        <NavItem>
                            <NavResume ><a href={"https://drive.google.com/file/d/17zBhyzKtbdZlYbqxVewo47vmBwLgF0FN/view?usp=share_link"} className="resume-setting" rel="noopener noreferrer" target="_blank">Resume</a></NavResume>
                        </NavItem>
                </NavbarContainer>
            </Nav>
        </>
    )
}



export default Navbar;