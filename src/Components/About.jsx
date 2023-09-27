import React, { useState } from "react";
import { Link } from "react-router-dom";
// import "../index.css";

// to run on local host you must have public:
// const imageFolderPath = "../public/assets";
// to run on render, the dist file only has assets folder so it needs this revised line, no public folder in dist and it get sconfused looking for assets (check each component to make sure)
const imageFolderPath = "./assets";

const ButtonMailto = ({ mailto, label }) => {
  return (
    <button>
      <Link
        to="#"
        onClick={(e) => {
          window.location.href = mailto;
          e.preventDefault();
        }}
      >
        {label}
      </Link>
    </button>
  );
};

export default function Contact() {
  return (
    <>
      <div class="topnav">
        <a href="/">Home</a>
        <a href="/Projects">Projects</a>
        <a href="/Contact">Contact</a>
        <a class="active" href="/About">
          About
        </a>
      </div>
      <div className="m-12">
        <h1 className="mt-12 mb-6">About Erica</h1>
        <p className="mb-6">Software Developer. Designer. Artist.</p>
        <p className="mb-6">Hello! I'm Erica. I love to read, record music, and practice yoga. While working on web design as a communications director, I became curious and fell in love with full stack software development. I just graduated from DigitalCrafts bootcamp based in Atlanta. </p>
        <p className="mb-6"><em>I built this portfolio website using React.js, Tailwind CSS, HTML, and CSS.</em></p>
        <p className="mb-6">
         <strong> Skills & Technologies: </strong><em>Debugging, JavaScript, Node.js, React, Express, Redux, PostgreSQL, Sequelize, Bootstrap, Tailwind CSS, Flexbox, Render Deploying, HTML, CSS, Adobe Creative Cloud Suite.</em>
        </p>
        <ul className="list-none">
          <li className="">
            <a href="https://www.linkedin.com/in/erica-linked/" target="_blank">
              {" "}
              <img
                src={`${imageFolderPath}/1.png`}
                alt="title"
                className="object-scale-down w-32 inline-block hover:opacity-50"
              />{" "}
            </a>
          </li>

          <li className="mt-6">
            <a
              href={`${imageFolderPath}/Erica-Bitting-Software-Developer-Resume.pdf`}
              download
            >
              {/*  PUT RESUME FILE ABOVE HERE */}
              <button>My Resume</button>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
