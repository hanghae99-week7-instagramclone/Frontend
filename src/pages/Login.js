import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./Login.css";
import { loginMemberDB } from "../redux/modules/memberSlice";

export default function Login() {
  const dispatch = useDispatch();
  const [btnState, setBtnState] = useState(false);

  const initialState = {
    email: "",
    password: "",
  };

  const [member, setMember] = useState(initialState);

  const onSignUpHandler = (event) => {
    const { name, value } = event.target;
    setMember({ ...member, [name]: value });

    if (member.email && member.password.length > 0) {
      setBtnState(true);
    } else {
      setBtnState(false);
    }
  };

  const login = () => {
    dispatch(
      loginMemberDB({
        email: member.email,
        password: member.password,
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
        <input
          autoComplete="off"
          placeholder=" "
          name="email"
          value={member.email}
          onChange={onSignUpHandler}
        />
        <label>이메일</label>
      </div>
      <div className="LoginInput">
        <input
          autoComplete="off"
          placeholder=" "
          type="password"
          name="password"
          value={member.password}
          onChange={onSignUpHandler}
        />
        <label>비밀번호</label>
      </div>

      <button
        className="LoginButton"
        disabled={btnState ? false : true}
        onClick={login}
      >
        로그인
      </button>
    </>
  );
}
