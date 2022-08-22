import "./SignUp.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createMemberDB } from "../redux/modules/memberSlice";

export default function SignUp(props) {
  const dispatch = useDispatch();

  const initialState = {
    email: "",
    nickname: "",
    username: "",
    password: "",
    passwordConfirm: "",
  };

  const [member, setMember] = useState(initialState);

  const onSignUpHandler = (event) => {
    const { name, value } = event.target;
    setMember({ ...member, [name]: value });
  };

  const createMember = () => {
    console.log("눌렸다");
    dispatch(
      createMemberDB({
        email: member.email,
        nickname: member.nickname,
        username: member.username,
        password: member.password,
        passwordConfirm: member.passwordConfirm,
      })
    );
  };

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
        <input
          onChange={onSignUpHandler}
          autoComplete="off"
          placeholder=" "
          name="email"
          value={member.email}
        />
        <label>이메일</label>
      </div>
      <div className="signUpInput">
        <input
          onChange={onSignUpHandler}
          autoComplete="off"
          placeholder=" "
          name="nickname"
          value={member.nickname}
        />
        <label>닉네임</label>
      </div>
      <div className="signUpInput">
        <input
          onChange={onSignUpHandler}
          autoComplete="off"
          placeholder=" "
          name="username"
          value={member.username}
        />
        <label>사용자 이름</label>
      </div>
      <div className="signUpInput">
        <input
          onChange={onSignUpHandler}
          autoComplete="off"
          type="password"
          placeholder=" "
          name="password"
          value={member.password}
        />
        <label>비밀번호</label>
      </div>
      <div className="signUpInput">
        <input
          onChange={onSignUpHandler}
          type="password"
          placeholder=" "
          name="passwordConfirm"
          value={member.passwordConfirm}
        />
        <label>비밀번호 확인</label>
      </div>
      <button className="signUpButton" onClick={createMember}>
        가입
      </button>
    </>
  );
}
