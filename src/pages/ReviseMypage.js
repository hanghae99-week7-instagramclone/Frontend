import React, { useEffect, useRef } from "react";
import Header from "../components/Header.js";
import "./ReviseMypage.css";
import { useState } from "react";
import axios from "axios"; // axios import 합니다.
import { useDispatch, useSelector } from "react-redux";
import { putReviseThunk } from "../redux/modules/reviseMypageSlice";
import setReviseUsername from "../redux/modules/reviseMypageSlice";
import setReviseNickname from "../redux/modules/reviseMypageSlice";
import setReviseUrl from "../redux/modules/reviseMypageSlice";
import setReviseBio from "../redux/modules/reviseMypageSlice";
import { getMypageThunk } from "../redux/modules/mypageSlice.js";

//response.headers.authorization로 저장한 setToken의 값은 지금 로그인 한 유저의 정보가 맞는지??

// console.log("안녕하세요 여기는 로컬 스토리지 입니다!!!!!!");
// console.log(localStorage);
// localStorage.setItem("token", "abcd");
// const b = localStorage.getItem("token");
// console.log(b);
// console.log( response.headers.authorization );

const reviseUserInfo = localStorage;
console.log(reviseUserInfo.id);

const ReviseMypage = () => {
  const memberId = localStorage.getItem("id"); // 로컬스토리지에 있는 memberId 가져오기
  const mypage = useSelector((state) => state.mypage.mypage.data); // 정보 가져오기
  const [fileImage, setFileImage] = useState(""); // 프로필 이미지 파일을 저장할 변수
  // 이미지가 없을 시 기본 프로필
  const [image, setImage] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  );
  const fileInput = useRef(null);

  // 프로필 사진 변경
  const onProfileChange = (e) => {
    if (e.target.files[0]) {
      setFileImage(e.target.files[0]);
    } else {
      //업로드 취소할 시
      setImage(
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
      );
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const dispatch = useDispatch();


  useEffect(() => {
    //memberId값을 넣어야함
    dispatch(getMypageThunk(memberId));
  }, [dispatch, memberId]);
  
  
  //input 태그 안에 value에다가 값이 저장 -> 1. state 바꿔놔야함(어떻게 바꾸는지)

  //2. onclick 했을 때
  // if( 데이터 중복검사 통과) //데이터가 비어있을때는 어떻게 해놓을까?
  //     dispatch
  // else
  //     아무것도안함

  const onClickProfileUpdate = () => {
    const formData = new FormData();

    formData.append("image", fileImage);

    dispatch(putReviseThunk({ formData, memberId }))   
}

  const initialState = {
    nickname: "",
    username: "",
    websiteUrl: "",
    bio: "",
  };

 //dispatch(putReviseThunk(reviseUserInfo.id));

  const [reviseProfile, setReviseProfile] = useState(initialState);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setReviseProfile({ ...reviseProfile, [name]: value });

  };
  
  return (
    <>
      <Header />
      <div className="whole-revise">
        <div className="revise-frame">
          <div className="revise-line-1">
            <div className="revise-image-area">
              <div className="revise-image">
                <img
                  src={mypage?.proprofileUrl ? mypage.proprofileUrl : image}
                  alt=""
                  style={{ width: "50px", height: "50px" }}
                  onClick={() => {
                    fileInput.current.click();
                  }}
                ></img>
                <input
                  type="file"
                  style={{ display: "none" }}
                  accept="image/jpg,impge/png,image/jpeg"
                  name="profile_img"
                  onChange={onProfileChange}
                  ref={fileInput}
                />
              </div>
            </div>
            <div className="show-and-change">
              <div className="revise-show-nickname">
                {reviseUserInfo.nickname}
              </div>
              <div className="revise-change-image">프로필 사진 바꾸기</div>
            </div>
          </div>
          <div className="revise-line-2">
            <div className="revise-username">이름</div>
            <input
              className="revise-username-input"
              type="text"
              value={reviseProfile.username}
              name="username"
              onChange={onChangeHandler}
              placeholder="이름"
            ></input>
          </div>
          <div className="revise-line-3">
            <div className="revise-nickname">사용자 이름</div>
            <input
              className="revise-nickname-input"
              type="text"
              value={reviseProfile.nickname}
              name="nickname"
              onChange={onChangeHandler}
              placeholder="사용자 이름"
            ></input>
          </div>
          <div className="revise-line-4">
            <div className="revise-url">웹사이트</div>
            <input
              className="revise-url-input"
              type="text"
              value={reviseProfile.websiteUrl}
              name="websiteUrl"
              onChange={onChangeHandler}
              placeholder="웹사이트"
            ></input>
          </div>
          <div className="revise-line-5">
            <div className="revise-bio">소개</div>
            <textarea
              className="revise-bio-input"
              type="text"
              value={reviseProfile.bio}
              name="bio"
              onChange={onChangeHandler}
              placeholder="소개"
            ></textarea>
          </div>
          <button className="revise-sub-button" onClick={onClickProfileUpdate}>
            제출
          </button>
        </div>
      </div>
    </>
  );
};

export default ReviseMypage;
