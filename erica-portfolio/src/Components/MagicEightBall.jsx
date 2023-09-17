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
        <h1 className="mb-12 project">Magic Eight Ball</h1>
        <ul className="list-none">
          <li>
            <form action="/projects">
              <button>See more projects</button>
            </form>
          </li>
        </ul>
      </div>
    </>
  );
}
