import React from "react";
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarWrapper,
  SideBarMenu,
  SideBarLink,
  SideBarLinkResume,
  // SlideBtnWrap,
} from "./SlideBarElements";

//  import {Pdf} from "../../../assets/resume/OrionPalmer-CV.docx";

const SideBar = ({ isOpen, toggle }) => {
  return (
    <>
      <SideBarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SideBarWrapper>
          <SideBarMenu>
            <SideBarLink
              to="top-container"
              onClick={toggle}
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-90}
            >
              Home
            </SideBarLink>
            {/* <SideBarLink to="technology" onClick={toggle}
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact="true" 
                            offset={-90}
                    >Tech</SideBarLink> */}
            <SideBarLink
              to="portfolio"
              onClick={toggle}
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-90}
            >
              Projects
            </SideBarLink>
            <SideBarLink
              to="about"
              onClick={toggle}
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-90}
            >
              About
            </SideBarLink>
            <SideBarLink
              to="contact-me"
              onClick={toggle}
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-90}
            >
              Contact
            </SideBarLink>
            <br />
            <br />
            <a
              href={
                "https://docs.google.com/document/d/1v1BRb90NHLOYgB2bC4-bfWX7dX7nKTmj/edit?usp=sharing&ouid=108099306262936657393&rtpof=true&sd=true"
              }
              className="resume-setting"
              rel="noopener noreferrer"
              target="_blank"
              onClick={toggle}
            >
              <SideBarLinkResume>Resume</SideBarLinkResume>
            </a>
          </SideBarMenu>
          <SideBarWrapper></SideBarWrapper>
        </SideBarWrapper>
      </SideBarContainer>
    </>
  );
};

export default SideBar;
