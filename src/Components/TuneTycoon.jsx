import React, { useState } from "react";
import { Link } from "react-router-dom";
// import "../index.css";

const imageFolderPath = "../public/assets";

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
        <h1 className="project">Tune Tycoon</h1>
        <ul className="list-none">
          <li className="m-6">
            <p className="mb-6">
              <em>
                <strong>Technologies used: </strong> JavaScript, Bootstrap, CSS,
                HTML, Genius API.
              </em>
            </p>
            <p>
              Can you guess which song is more popular? Play Tune Tycoon and
              test your knowledge of music popularity. Inspired by classic
              higher-or-lower games, Tune Tycoon uses data from the Genius API,
              presents two options, and challenges you to select which was more
              popular.
            </p>
          </li>
          <li>
            <img
              src={`${imageFolderPath}/tune-tycoon.png`}
              alt="title"
              className="object-scale-down w-1/2 inline-block "
            />
          </li>

          <li className="m-6">
            <a
              href="https://dkd03813.github.io/HigherOrLowerGame/"
              target="_blank"
            >
              <button>Preview Tune Tycoon</button>
            </a>
          </li>

          <li className="m-6">
            <a
              href="https://github.com/dkd03813/HigherOrLowerGame"
              target="_blank"
            >
              <button>Tune Tycoon on GitHub</button>
            </a>
          </li>

          <li className="m-6">
            <form action="/projects">
              <button>See more projects</button>
            </form>
          </li>
        </ul>
      </div>
    </>
  );
}
