import React, { useState } from "react";
import shareicon from "./images/icon-share.svg";
import facebook from "./images/icon-facebook.svg";
import printer from "./images/icon-pinterest.svg";
import twitter from "./images/icon-twitter.svg";
function Share() {
  const [state, setstate] = useState(false);
  return (
    <div className="sharecon">
      <button
        className="share-image"
        onClick={() => setstate(state ? false : true)}
      >
        <img src={shareicon} alt="shareicon" id="image1" />
        </button>
      <div
        style={state ? { visibility: "visible" } : { visibility: "hidden" }}
        className="logos"
      >
        <span>SHARE</span>

        <a href="#"> <img src={facebook} alt="facebook" /> </a>
        <a href="#"> <img src={twitter} alt="twitter" /> </a>
       <a href="#"> <img src={printer} alt="printer" /> </a>
      </div>
    </div>
  );
}

export default Share;
