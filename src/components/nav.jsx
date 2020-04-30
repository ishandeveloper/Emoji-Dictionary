import React from "react";

function Nav() {
  return (
    <nav class="navbar sticky-top navbar-light bg-dark">
      <span class="navbar-brand mb-0 h1 text-white">
        📖{" "}
        <div className="hero-text">
          Emoji Dictionary
          <br />
          <div className="credits">
            by{" "}
            <b>
              <a href="http://ishandeveloper.com">ishandeveloper</a>
            </b>
          </div>
        </div>
      </span>
    </nav>
  );
}

export default Nav;
