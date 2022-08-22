import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import "./Login.css";
import { loginMemberDB } from "../redux/modules/memberSlice";

export default function Login() {
  const dispatch = useDispatch();

  const email_ref = useRef(null);
  const password_ref = useRef(null);

  const login = () => {
    dispatch(
      loginMemberDB({
        email: email_ref.current.value,
        password: password_ref.current.value,
      })
    );
  };

  return (
    <>
      <img
        className="loginImg"
        alt="images"
        src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
      ></img>

      <div className="LoginInput">
        <input autoComplete="off" placeholder=" " ref={email_ref} />
        <label>이메일</label>
      </div>
      <div className="LoginInput">
        <input
          autoComplete="off"
          placeholder=" "
          type="password"
          ref={password_ref}
        />
        <label>비밀번호</label>
      </div>

      <button className="LoginButton" onClick={login}>
        로그인
      </button>
    </>
  );
}
