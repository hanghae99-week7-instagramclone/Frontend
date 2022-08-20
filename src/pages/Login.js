import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <>
      <img
        className="loginImg"
        alt="images"
        src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
      ></img>

      <div className="LoginInput">
        <input autoComplete="off" placeholder=" " />
        <label>아이디</label>
      </div>
      <div className="LoginInput">
        <input autoComplete="off" placeholder=" " type="password" />
        <label>비밀번호</label>
      </div>

      <button className="LoginButton">로그인</button>
    </>
  );
}
