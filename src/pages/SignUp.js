import React from "react";
import "./SignUp.css";

export default function SignUp(props) {
  const { goLoginPage } = props;

  return (
    <>
      <img
        className="signUpImg"
        alt="images"
        src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
      ></img>
      <div className="signUpText">
        친구들의 사진과 동영상을 보려면 가입하세요.
      </div>

      <div className="signUpInput">
        <input autoComplete="off" placeholder=" " />
        <label>이메일</label>
      </div>
      <div className="signUpInput">
        <input autoComplete="off" placeholder=" " />
        <label>닉네임</label>
      </div>
      <div className="signUpInput">
        <input autoComplete="off" placeholder=" " />
        <label>사용자 이름</label>
      </div>
      <div className="signUpInput">
        <input autoComplete="off" placeholder=" " type="password" />
        <label>비밀번호</label>
      </div>
      <div className="signUpInput">
        <input autoComplete="off" placeholder=" " type="password" />
        <label>비밀번호 확인</label>
      </div>
      <button className="signUpButton">가입</button>
    </>
  );
}
