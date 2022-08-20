import React from "react";
import "./MypageStyle.css";

const Mypage = () => {
  return (
    <div className="whole-mypage">
      <div className="mypage-frame">
        <div className="wrap-info">
          <div className="image-area">
            <div className="my-image">프로필 이미지</div>
          </div>
          <div className="info-line-1">
            <div>newjeans_official</div>
            <button>메시지 보내기</button>
            <button>팔로우</button>
          </div>
          <div className="info-line-2">
            <div className="post-area">
              <div>게시물</div>
              <div>게시물수</div>
            </div>
            <div className="follower-area">
              <div>팔로워</div>
              <div>팔로워수</div>
            </div>
            <div className="follow-area">
              <div>팔로우</div>
              <div>팔로우수</div>
            </div>
          </div>
          <div className="info-line-3">
            <div>사용자이름</div>
          </div>
        </div>
        <div className="mypage-navbar">
          <div className="mypage-navbar-wrap"></div>
          <div>게시물</div>
          <div>릴스</div>
          <div>태그됨</div>
        </div>
        <div>
          사진박스
          <div>사진1</div>
          <div>사진2</div>
          <div>사진3</div>
        </div>
      </div>
    </div>
  );
};

export default Mypage;
