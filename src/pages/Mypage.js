import React, { useEffect, useState } from "react";
// import { GrGrid } from "react-icons/fa";
import "./Mypage.css";
import "../components/Header.js";
import axios from "axios"; // axios import 합니다.
import { useDispatch, useSelector } from "react-redux";
import { getMypageThunk } from "../redux/modules/mypageSlice";
import FollowToggle from "../redux/modules/mypageSlice";

const Mypage = () => {
  const dispatch = useDispatch();
  //const { isLoading, error, mypage, stateOfFollow } = useSelector(

  const mypage = useSelector((state) => state.mypage.mypage.data);

  // const { mypage } = useSelector((state) => state.mypage);
  // (원래 이렇게 했다가 데이터 불러오는거 실패함. 경로도 틀렸고, const mypage의 중괄호도 빼야함)

  const [nickname, setNickname] = useState("");
  const [username, setUsername] = useState("");
  const [postNumber, setPostNumber] = useState(0);
  const [followerNumber, setFollowerNumber] = useState(0);
  const [followNumber, setFollowNumber] = useState(0);
  const [postImage, setPostImage] = useState([]);

  useEffect(() => {
    dispatch(getMypageThunk());
  }, [dispatch]);

  // const onClickHandlerFollow = () => {
  //   dispatch(FollowToggle());
  // };

  return (
    <div className="whole-mypage">
      <div className="mypage-frame">
        <div className="wrap-info">
          <div className="image-area">
            <div className="my-image">
              <img src="../../55.png"></img>
            </div>
          </div>
          <div className="right-info">
            <div className="info-line-1">
              <div className="user-nickname">{mypage.nickname}</div>
              <button className="button-send-message">메시지 보내기</button>
              <button className="button-follow">
                {/* onClick={onClickHandlerFollow} */}
                팔로우
              </button>
              <p className="info-option">•••</p>
            </div>
            <div className="info-line-2">
              <div className="post-area">
                <div className="mypage-post">게시물</div>
                <div className="post-number">{postNumber}</div>
              </div>
              <div className="follower-area">
                <div className="mypage-follower">팔로워</div>
                <div className="follower-number">{followerNumber}</div>
              </div>
              <div className="follow-area">
                <div className="mypage-follow">팔로우</div>
                <div className="follow-number">{followNumber}</div>
              </div>
            </div>
            <div className="info-line-3">
              <div className="mypage-username">{mypage.username}</div>
            </div>
          </div>
        </div>
        <hr className="hr-line"></hr>
        <div className="mypage-navbar">
          <div className="mypage-navbar-wrap"></div>
          <div className="navbar-posts">게시물</div>
          <div className="navbar-reels">릴스</div>
          <div className="navbar-tagged">태그됨</div>
        </div>
        <div className="post-box">
          <div className="div-post-1">
            <div className="post-1"></div>
          </div>
          <div className="div-post-2">
            <div className="post-2"></div>
          </div>
          <div className="div-post-3">
            <div className="post-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mypage;
