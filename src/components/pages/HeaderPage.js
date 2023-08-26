import React, { useState, useEffect } from "react";
import BackgroundVideo from "../layout/BackgroundVideo";
import profileIMG from "../../assets/img/orionpalmer.webp";
import Tech from "../layout/tech";

const Header = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [fadeOutFirst, setFadeOutFirst] = useState(false);
  const [fadeOutSecond, setFadeOutSecond] = useState(false);

  const firstWord = ["Full Stack", "Software", "Problem", "Adaptable", "Avid"];

  const secondWord = [
    "Developer",
    "Engineer",
    "Solver",
    "Programmer",
    "Learner",
  ];

  useEffect(() => {
    setFadeOutFirst(false);
    setFadeOutSecond(false);

    const intervalId = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % firstWord.length);
    }, 6000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    if (fadeOutFirst) {
      const timeoutId = setTimeout(() => {
        setFadeOutFirst(false);
      }, 5000); // Fade-in duration for the first word

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [wordIndex, fadeOutFirst]);

  useEffect(() => {
    if (fadeOutSecond) {
      const timeoutId = setTimeout(() => {
        setFadeOutSecond(false);
      }, 4800); // Fade-in duration for the second word (200ms slower)

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [wordIndex, fadeOutSecond]);

  useEffect(() => {
    setFadeOutFirst(true);

    const firstTimeoutId = setTimeout(() => {
      setFadeOutSecond(true);
    }, 200); // Delay for starting the fade-in of the second word (200ms slower)

    return () => {
      clearTimeout(firstTimeoutId);
    };
  }, [wordIndex]);

  return (
    <div>
      <div id="top-container">
        <BackgroundVideo />
        <div className="profile">
          <div className="nameInfo">
            <h1>Orion Palmer</h1>
            <h2>
              <span
                className={`pro first-work-text ${
                  fadeOutFirst ? "fade-out" : ""
                }`}
              >
                {firstWord[wordIndex]}
              </span>
              <span
                className={`pro second-work-text ${
                  fadeOutSecond ? "fade-out" : ""
                }`}
              >
                {secondWord[wordIndex]}
              </span>
            </h2>
          </div>
          <img
            className="profile-img"
            width="200px"
            src={profileIMG}
            alt="Orion"
          />
        </div>
        <Tech />
      </div>
    </div>
  );
};

export default Header;
