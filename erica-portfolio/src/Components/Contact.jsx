import React, { useState } from "react";
import { Link } from "react-router-dom";
// import "../index.css";

const imageFolderPath = "../src/assets";

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
        <a href="#about">About</a>
      </div>
      <div className="m-12">
        <h1 className="mt-12 mb-6">Let's connect!</h1>
        <p className="mb-6">Contact me via Linkedin, Github, or email. </p>
        <ul className="list-none">
          <li className="">
            <a href="https://www.linkedin.com/in/erica-linked/" target="_blank">
              {" "}
              <img
                src={`${imageFolderPath}/1.png`}
                alt="title"
                className="object-scale-down w-1/12 inline-block hover:opacity-50"
              />{" "}
            </a>
          </li>

          <li>
            <a href="https://github.com/erica-b" target="_blank">
              {" "}
              <img
                src={`${imageFolderPath}/2.png`}
                alt="title"
                className="object-scale-down w-1/12 inline-block hover:opacity-50 mt-2"
              />
            </a>
          </li>

          <li className="mt-6">
            <ButtonMailto
              label="Email me"
              mailto="mailto:ericabitting@gmail.com"
            />
          </li>
          <li className="mt-6">
            <a href={`${imageFolderPath}/2.png`} download>
              {/*  PUT RESUME FILE ABOVE HERE */}
              <button>My Resume</button>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
