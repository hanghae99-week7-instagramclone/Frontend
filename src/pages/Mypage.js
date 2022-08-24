import React, { useEffect, useState } from "react";
import { GrGrid } from "react-icons/gr";
import { BiMoviePlay } from "react-icons/bi";
import { MdOutlinePersonPin } from "react-icons/md";
import "./Mypage.css";
import Header from "../components/Header.js";
import ReviseMypage from "./ReviseMypage";
import axios from "axios"; // axios import 합니다.
import { useDispatch, useSelector } from "react-redux";
import {
  getMypageThunk,
  getPostImageListThunk,
} from "../redux/modules/mypageSlice";
import FollowToggle from "../redux/modules/mypageSlice";
import postListSlice from "../redux/modules/postListSlice";
import { useNavigate } from "react-router-dom";

const Mypage = () => {
  const dispatch = useDispatch();
  //const { isLoading, error, mypage, stateOfFollow } = useSelector(
  const navigate = useNavigate();
  const mypage = useSelector((state) => state.mypage.mypage);
  const postImageList = useSelector((state) => state.mypage.postImageList);

  console.log("Checking mypage", mypage);

  // const { mypage } = useSelector((state) => state.mypage);
  // (원래 이렇게 했다가 데이터 불러오는거 실패함. 경로도 틀렸고, const mypage의 중괄호도 빼야함)

  const [nickname, setNickname] = useState("");
  const [username, setUsername] = useState("");
  const [postNumber, setPostNumber] = useState(0);
  const [followerNumber, setFollowerNumber] = useState(0);
  const [followNumber, setFollowNumber] = useState(0);
  const [postImage, setPostImage] = useState([]);

  //mypage -> 프로필 수정 -> 지금 페이지 주인(??) == 로그인한 사람(localstorage)

  //불러오고 난 뒤
  //--------

  //-> 페이지 조회 -> username, nickname, 기타등등 (placeholder)

  //내용 입력(var) -> button -> axios.put

  ///{memberid}

  //const isMe (localStorage) => {
  // if(localStorage.id === )
  //} ;

  // const onClickHandlerFollow = () => {
  //   dispatch(FollowToggle());
  // };

  //TODO
  const tempMemberId = 23;

  useEffect(() => {
    //memberId값을 넣어야함
    dispatch(getMypageThunk(tempMemberId));
    dispatch(getPostImageListThunk(tempMemberId));
  }, [dispatch]);

  // 프로필 수정 버튼에서
  // {isMe?
  // ( <button onClick()=> 페이지 넘기기
  //  ></button>
  // )
  // :
  // <button 메시지 & 팔로우 버튼></button>
  // }

  // const isFollow = () => {
  //    if (1)
  // tempMemberId == localStorage.id;
  //      <button className="button-follow">
  //{
  /* onClick={onClickHandlerFollow} */
  //}
  // 팔로우;
  //     </button>
  //   );
  //  else
  //    return (
  //      <button className="button-unfollow">
  //        {/* onClick={onClickHandlerFollow} */}
  //        팔로우 취소
  //      </button>
  //    );
  //};

  return (
    <>
      <Header />
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
                <div className="user-nickname">{mypage?.nickname}</div>
                <button
                  onClick={() => {
                    navigate("/ReviseMypage");
                  }}
                  className="button-lets-revise-mypage"
                >
                  프로필 편집
                </button>
                <button className="button-send-message">메시지 보내기</button>
                {1 ? (
                  <button className="button-follow">
                    {/* onClick={onClickHandlerFollow} */}
                    팔로우
                  </button>
                ) : (
                  <button className="button-unfollow">
                    {/* onClick={onClickHandlerFollow} */}
                    팔로우 취소
                  </button>
                )}
                <p className="info-option">•••</p>
              </div>
              <div className="info-line-2">
                <div className="post-area">
                  <div className="mypage-post">게시물</div>
                  <div className="post-number">{mypage?.postCount}</div>
                </div>
                <div className="follower-area">
                  <div className="mypage-follower">팔로워</div>
                  <div className="follower-number">{mypage?.follower}</div>
                </div>
                <div className="follow-area">
                  <div className="mypage-follow">팔로우</div>
                  <div className="follow-number">{mypage?.follow}</div>
                </div>
              </div>
              <div className="info-line-3">
                <div className="mypage-username">{mypage?.username}</div>
                <div className="mypage-bio">{mypage?.bio}</div>
                <div className="mypage-url">{mypage?.websiteUrl}</div>
              </div>
            </div>
          </div>
          <hr className="hr-line"></hr>
          <div className="mypage-navbar">
            <div className="mypage-navbar-wrap"></div>
            <div className="navbar-posts-icon">
              <GrGrid />
            </div>
            <div className="navbar-posts">게시물</div>
            <div className="navbar-reels-icon">
              <BiMoviePlay />
            </div>
            <div className="navbar-reels">릴스</div>
            <div className="navbar-tagged-icon">
              <MdOutlinePersonPin />
            </div>
            <div className="navbar-tagged">태그됨</div>
          </div>
          <div className="post-box">
            {postImageList?.map((postImage) => {
              return (
                <div className="div-post-image">
                  <img
                    className="post-image-set"
                    src={postImage.imageUrlList[0]}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Mypage;
