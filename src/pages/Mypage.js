import React, { useEffect, useState } from "react";
// import { GrGrid } from "react-icons/fa";
import "./Mypage.css";
import "../components/Header.js";
import axios from "axios"; // axios import 합니다.
import { useDispatch } from "react-redux";
import { __getTodos } from "../redux/modules/followSlice";

const Mypage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getTodos());
  }, [dispatch]);

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
              <div className="user-nickname">newjeans_official</div>
              <button className="button-send-message">메시지 보내기</button>
              <button className="button-follow">팔로우</button>
              <p className="info-option">•••</p>
            </div>
            <div className="info-line-2">
              <div className="post-area">
                <div className="mypage-post">게시물</div>
                <div className="post-number">72</div>
              </div>
              <div className="follower-area">
                <div className="mypage-follower">팔로워</div>
                <div className="follower-number">1.1M</div>
              </div>
              <div className="follow-area">
                <div className="mypage-follow">팔로우</div>
                <div className="follow-number">2</div>
              </div>
            </div>
            <div className="info-line-3">
              <div className="mypage-username">NewJeans</div>
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
