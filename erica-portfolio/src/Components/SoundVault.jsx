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
        <a href="#about">About</a>
      </div>

      <div className="m-12">
        <h1 className="mb-12 project">SoundVault</h1>
        <ul className="list-none">
          <li>
            <p>Langages: Node.js, Express, EJS, PostgreSQL, Sequelize</p>
            <p>Preview: SoundVault</p>
            <p>
              Discover your favorite music, create a profile with your favorites
              and share with others.
            </p>
          </li>

          <li className="">
            <a href="https://www.linkedin.com/in/erica-linked/" target="_blank">
                {/* PUT DEPLOY LINK HERE */}
    
              <img
                src={`${imageFolderPath}/SoundVault.png`}
                alt="title"
                className="object-scale-down w-1/3 inline-block hover:opacity-50"
              />
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
