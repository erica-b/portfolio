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
        <h1 className="project">SoundVault</h1>
        <ul className="list-none">
          <li className="m-6">
            <p className="mb-6">
              <em>
                <strong>Technologies used: </strong> full stack CRUD app using Node.js, Express, PostgreSQL, JavaScript, JWT, EJS Templating, Bootstrap, CSS, HTML. 
              </em>
            </p>
            <p>
            Like Goodreads for music, register an account and save your favorite music to your profile page. Login
              to add your favorite songs, artists, and albums to your profile. Remember all the albums you've listened to and show them off to friends. 
            </p>
            {/* <p>
              Explore a vast collection of music from various genres and
              artists. Register and create your personalized{" "}
              <strong>SoundVault</strong> to keep track of your favorites. Login
              to add your favorite songs, artists, and albums to your profile.
            </p> */}
          </li>
          <li>
            <img
              src={`${imageFolderPath}/SoundVault.png`}
              alt="title"
              className="object-scale-down w-1/2 inline-block "
            />
          </li>

          <li className="m-6">
            <a href="https://soundvault-uw41.onrender.com/" target="_blank">
              <button>Preview SoundVault</button>
            </a>
          </li>
            
          <li className="m-6">
            <a href="https://github.com/erica-b/SoundVault" target="_blank">
              <button>SoundVault GitHub</button>
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
