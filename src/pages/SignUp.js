import "./SignUp.css";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { createMemberDB } from "../redux/modules/memberSlice";
import { apis } from "../shared/api";

export default function SignUp() {
  const dispatch = useDispatch();

  const email_ref = useRef("");

  const [btnState, setBtnState] = useState(false);

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

    if (
      member.email &&
      member.nickname &&
      member.email &&
      member.password &&
      member.passwordConfirm.length > 0
    ) {
      setBtnState(true);
    } else {
      setBtnState(false);
    }
  };

  const createMember = () => {
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

  const handleEmailCheck = () => {
    if (member.email === "") {
      alert("이메일을 입력하세요");
      return;
    }

    apis.checkEmail(member.email).then((response) => {
      if (response.data.data) {
        alert("사용 가능한 아이디입니다.");
      } else {
        alert("사용 불가능한 아이디입니다.");
        setMember({
          email: "",
          nickname: "",
          username: "",
          password: "",
          passwordConfirm: "",
        });
      }
    });
  };

  const handleNicknameCheck = () => {
    apis.checkNickname(member.nickname).then((response) => {
      console.log(response);
      if (member.nickname === "") {
        alert("이메일을 입력하세요");
        return;
      }

      if (response.data.data) {
        alert("사용 가능한 닉네임입니다.");
      } else {
        alert("사용 불가능한 닉네임입니다.");
        setMember({
          email: member.email,
          username: member.username,
          nickname: "",
          password: "",
          passwordConfirm: "",
        });
      }
    });
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
          onBlur={handleEmailCheck}
          ref={email_ref}
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
          name="username"
          value={member.username}
        />
        <label>사용자 이름</label>
      </div>
      <div className="signUpInput">
        <input
          onChange={onSignUpHandler}
          onBlur={handleNicknameCheck}
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
      <button
        className="signUpButton"
        disabled={btnState ? false : true}
        onClick={createMember}
      >
        가입
      </button>
    </>
  );
}
