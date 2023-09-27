import React, { useState } from "react";
import { Link } from "react-router-dom";
// import "../index.css";

// to run on local host you must have public:
// const imageFolderPath = "../public/assets";
// to run on render, the dist file only has assets folder so it needs this revised line, no public folder in dist and it get sconfused looking for assets (check each component to make sure)
const imageFolderPath = "./assets";

export default function Portfolio() {
  return (
    <>
      <div class="topnav">
        <a href="/">Home</a>
        <a class="active" href="/Projects">
          Projects
        </a>
        <a href="/Contact">Contact</a>
        <a href="/About">About</a>
      </div>

      <div className="m-12">
        <h1 className="mb-12">My Projects</h1>
        <ul className="list-none">
          <li className="">
            <Link to="/SoundVault">
              <img
                src={`${imageFolderPath}/SoundVault.png`}
                alt="title"
                className="object-scale-down w-1/2 inline-block hover:opacity-50 px-3"
              />
            </Link>
            <Link to="/MagicEightBall">
              <img
                src={`${imageFolderPath}/MagicEightBall.png`}
                alt="title"
                className="object-scale-down w-1/2 inline-block hover:opacity-50 px-3"
              />
            </Link>
          </li>
          <li className="">
          <Link to="/TuneTycoon">
              <img
                src={`${imageFolderPath}/tune-tycoon.png`}
                alt="title"
                className="object-scale-down w-1/2 inline-block hover:opacity-50 px-3 py-6"
              />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

{
  /* <img src={`${imageFolderPath}/HighwayHarmony2.png`} alt="title" className="object-scale-down w-40" /> */
}
