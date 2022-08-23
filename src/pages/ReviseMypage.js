import React from "react";
import Header from "../components/Header.js";

const ReviseMypage = () => {
  return (
    <>
      <Header />
      <div className="whole-revise">
        <div className="revise-frame">
          <div className="revise-line-1">
            <div className="revise-image-area">
              <div className="revise-image"></div>
              <div className="revise-show-nickname"></div>
              <div className="revise-change-image">프로필 사진 바꾸기</div>
            </div>
          </div>
          <div className="revise-line-2">
            <div className="revise-username">이름</div>
            <input className="revise-username-input" placeholder="이름"></input>
          </div>
          <div className="revise-line-3">
            <div className="revise-nickname">사용자 이름</div>
            <input
              className="revise-nickname-input"
              placeholder="사용자 이름"
            ></input>
          </div>
          <div className="revise-line-4">
            <div className="revise-url">웹사이트</div>
            <input className="revise-url-input" placeholder="웹사이트"></input>
          </div>
          <div className="revise-line-5">
            <div className="revise-bio">소개</div>
            <input className="revise-bio-input" placeholder="소개"></input>
          </div>
          <button className="revise-sub-button">제출</button>
        </div>
      </div>
    </>
  );
};

export default ReviseMypage;
