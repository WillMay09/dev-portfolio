import React from "react";
import "./body.css"
import portraitbw from "./portraitbw.jpg"
export function Body() {
  return (
    <>
      <div className="content">
        <div className="rightContents">
          <h1>William Mayhood-Aspiring Software Engineer</h1>
          <div className="description">
            <h4>About</h4>
            <h6>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </h6>
          </div>
        </div>
        <div className="leftContents">
            <img src={portraitbw} alt="Portrait of developer"/>

        </div>
      </div>
    </>
  );
}
