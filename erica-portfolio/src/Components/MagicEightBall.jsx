import React, { useState } from "react";
import { Link } from "react-router-dom";
// import "../index.css";

const imageFolderPath = "../src/assets";

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
        <h1 className="project">Magic Eight Ball</h1>
        <ul className="list-none">
          <li className="m-6">
            <p className="mb-6">
              <em>
                <strong>Languages: </strong>React.js
              </em>
            </p>
            <p className="mb-6">
              Magic Eight Ball is a React application based on the classic Magic
              Eight Ball toy.{" "}
            </p>
            <p>
              <strong>How to:</strong> Type in your question. Click the
              circlular <strong>Ask</strong> button on the black magic eight
              ball circle. Wait while the magic ball thinks for a second … and
              spits out your answer!
            </p>
          </li>
          <li>
            <img
              src={`${imageFolderPath}/MagicEightBall.png`}
              alt="title"
              className="object-scale-down w-1/2 inline-block "
            />
          </li>

          <li className="m-6">
            <a href="https://magic-eight-ball11.onrender.com/" target="_blank">
              <button>View Magic Eight Ball</button>
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
