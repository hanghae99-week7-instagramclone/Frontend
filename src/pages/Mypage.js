import React from "react";
import "./MypageStyle.css";

const Mypage = () => {
  return (
    <div className="whole-mypage">
      <div className="wrap-info">
        <div className="image-area">
          <div className="my-image">프로필 이미지</div>
        </div>
        <div className=""></div>
        <div>newjeans_official</div>
        <button>팔로우</button>
        <div>게시물</div>
        <div>게시물수</div>
        <div>팔로워</div>
        <div>팔로워수</div>
        <div>팔로우</div>
        <div>팔로우수</div>
        <div>사용자이름</div>
      </div>
      <div className="mypage-navbar"></div>
      <div>게시물</div>
      <div>릴스</div>
      <div>동영상</div>
      <div>태그됨</div>
      <div>사진박스</div>
      <div>사진1</div>
    </div>
  );
};

export default Mypage;
