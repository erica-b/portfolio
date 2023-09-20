import React, { useState } from "react";
import "../App.css";
import "../index.css";
import {Link} from "react-router-dom";

// to run on local host you must have line 7 instead of line 8 
// const imageFolderPath = "../public/assets";
// to run on render, the dist file only has assets folder so it needs this revised line (check each component to make sure)

const imageFolderPath = "./assets";

export default function Index() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="index-page">
        <ul className="list-none">
          <li>
            <h1>Erica Bitting</h1>
          </li>
          <li>
            <p className="read-the-docs">Welcome to my portfolio.</p>
          </li>
          <li>
            <Link to="/projects">
              <button>See more</button>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

// export default Index
