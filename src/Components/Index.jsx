import React, { useState } from "react";
import "../App.css";
import "../index.css";
import {Link} from "react-router-dom";

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
