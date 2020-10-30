import React from "react";
import "./login.scss";

const LogIn = () => {
  console.log(process.env.REACT_APP_kEY);
  return (
    <div className="login_page">
      <div className="login_btn">
        <a href="https://github.com/login/oauth/authorize?client_id=31be1ac6df6e2406ae63">
          <i class="github icon"></i> Login with GitHub
        </a>
      </div>
    </div>
  );
};

export default LogIn;