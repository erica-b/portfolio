import React, { useState } from "react";
import "../App.css";
import "../index.css";

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
            <form action="/projects">
              <button>See more</button>
            </form>
          </li>
        </ul>
      </div>
    </>
  );
}

// export default Index
