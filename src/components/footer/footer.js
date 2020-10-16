import React from "react";
import "./footer.scss";

const Footer = (props) => {
  return (
    <footer>
      <div>
        All rights reserved &copy; FOSSDorm 2020&nbsp;
        <a
          href="https://github.com/FOSSDorm"
          rel="noopener noreferrer"
          target="_blank"
          style={{ color: "black",fontSize:"1.3rem" }}
        >
          <i aria-hidden="true" class="github icon"></i>
        </a>
      </div>
    </footer>
  );
};
export default Footer;
