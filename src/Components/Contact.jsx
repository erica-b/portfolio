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
        <a class="active" href="/Contact">
          Contact
        </a>
        <a href="/About">About</a>
      </div>
      <div className="m-12">
        <h1 className="mt-12 mb-6">Let's connect!</h1>
        <p className="mb-6">Currently located in Atlanta, Georgia.</p>
        <p className="mb-6">Connect with me on Linkedin, checkout my Github, or email me. </p>
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

          <li>
            <a href="https://github.com/erica-b" target="_blank">
              {" "}
              <img
                src={`${imageFolderPath}/2.png`}
                alt="title"
                className="object-scale-down w-32 inline-block hover:opacity-50 mt-2"
              />
            </a>
          </li>

          <li className="mt-6">
            <ButtonMailto
              label="Email me"
              mailto="mailto:ericabitting@gmail.com"
            />
          </li>
        </ul>
      </div>
    </>
  );
}
