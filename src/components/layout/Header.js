import React from "react";
// import Profile from "./objects"
import BackgroundVideo from "./BackgroundVideo";
import profileIMG from "../../assets/img/orionpalmer.webp";
// import Events from "../script"

export default function Header() {
  return (
    <div>
      {/* <Events/> */}
      <div id="top-container">
        <BackgroundVideo />
        <div className="profile">
          <h2>Hello There!</h2>
          <h1>I'm Orion</h1>
          <div>
            <img
              className="profile-img"
              width="200px"
              src={profileIMG}
              alt="Orion"
            />
          </div>
          <h2>
            <span className="pro first-work-text"></span>
            <span className="pro second-work-text"></span>
          </h2>
        </div>
        <br />
        <hr />
        {/* <MiddleSection/> */}
      </div>
    </div>
  );
}

const firstWordSelector = document.querySelector(".first-word-text");
const secondWordSelector = document.querySelector(".second-word-text");

const firstWord = [
  {
    key: 1,
    text: "Full Stack",
  },
  {
    key: 2,
    text: "Software",
  },
  {
    key: 3,
    text: "Problem",
  },
  {
    key: 4,
    text: "Adaptable",
  },
  {
    key: 5,
    text: "Avid",
  },
];

const secondWord = [
  {
    key: 1,
    text: "Developer",
  },
  {
    key: 2,
    text: "Engineer",
  },
  {
    key: 3,
    text: "Solver",
  },
  {
    key: 4,
    text: "Programmer",
  },
  {
    key: 5,
    text: "Learner",
  },
];

let index = 1;

function updateTitleText() {
  const firstWordTitle = firstWord[index];
  const secondWordTitle = secondWord[index];

  firstWordSelector.classList.remove("fade-in");
  secondWordSelector.classList.remove("fade-in");

  setTimeout(() => {
    firstWordSelector.innerHTML = firstWordTitle.text;
    secondWordSelector.innerHTML = secondWordTitle.text;

    firstWordSelector.classList.add("fade-in");
    secondWordSelector.classList.add("fade-in");
  }, 500);

  index++;

  if (index >= firstWord.length) {
    index = 0;
  }
  if (index >= secondWord.length) {
    index = 0;
  }
}

setInterval(updateTitleText, 5000);
console.log("connected to bundle");
