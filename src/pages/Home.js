import React from "react";
import "./Home.css";
import Login from "./Login";
import SignUp from "./SignUp";

export default function Home() {
  const [loginPage, setLoginPage] = React.useState(true);

  const goSignUpPage = () => {
    setLoginPage(false);
  };

  const goLoginPage = () => {
    setLoginPage(true);
  };

  return (
    <div className="Container">
      <img
        className="homeImg"
        alt="images"
        src="https://www.instagram.com/static/images/homepage/screenshots/screenshot3.png/94edb770accf.png"
      ></img>
      <div className="pageContainer">
        <div className="signContainer">
          {loginPage ? <Login></Login> : <SignUp></SignUp>}
        </div>
        <div className="buttonContainer">
          {loginPage ? (
            <>
              <div className="homeText">계정이 없으신가요</div>
              <button className="homeButton" onClick={goSignUpPage}>
                가입하기
              </button>
            </>
          ) : (
            <>
              <div className="homeText">계정이 있으신가요</div>
              <button className="homeButton" onClick={goLoginPage}>
                로그인
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
