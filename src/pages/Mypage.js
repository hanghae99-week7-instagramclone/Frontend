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
  followEventThunk,
} from "../redux/modules/mypageSlice";
import {
  FollowToggle,
  changeFollowerThunk,
} from "../redux/modules/mypageSlice";
import postListSlice from "../redux/modules/postListSlice";
import { useNavigate, useParams } from "react-router-dom";
import { asyncGetOneMemberProfile } from "../redux/modules/memberSlice";
import Modal from "../components/Modal";

const Mypage = () => {
  const memberId = useParams().id;
  const dispatch = useDispatch();
  //const { isLoading, error, mypage, stateOfFollow } = useSelector(
  const navigate = useNavigate();
  const me = useSelector((state) => state.member.me);
  let member = useSelector((state) => state.member.member);
  let postImageList = useSelector((state) => state.mypage.postImageList);
  const [image, setImage] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  );

  // const { mypage } = useSelector((state) => state.mypage);
  // (원래 이렇게 했다가 데이터 불러오는거 실패함. 경로도 틀렸고, const mypage의 중괄호도 빼야함)

  const [nickname, setNickname] = useState("");
  const [username, setUsername] = useState("");
  const [postNumber, setPostNumber] = useState(0);
  const [followerNumber, setFollowerNumber] = useState(0);
  const [followNumber, setFollowNumber] = useState(0);
  const [postImage, setPostImage] = useState([]);

  const [follow, setFollow] = useState(false);
	// console.log(member.followByMe);

	const [modalLogoutVisible, setModalLogoutVisible] = useState(false);

  // const onClickHandlerFollow = (e) => {
  //   const { name, value } = e.target;
  //   if (follow == true) setFollow(false);
  //   else {
  //     setFollow(true);
  //   }
  // };

  const isMe = me?.id === +memberId;
  member = isMe ? me : member;
  // console.log(me.id, +memberId, isMe);
  // console.log(isMe);

  // console.log(postImageList);

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

  // 역순으로 출력

  // let list = [];
  // for (let i=postImageList.length-1; i>=0; i--) {
  // 	list.push(postImageList[i]);
  // }
  // postImageList = list;

  if (postImageList.length > 0) {
    postImageList = postImageList
      .slice()
      .sort(
        (a, b) =>
          new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf(),
      );
  }

	const onChangeFollower = async () => {
		await dispatch(changeFollowerThunk(member.id));
		await dispatch(asyncGetOneMemberProfile(memberId));
		setFollow(!follow);
	}

  useEffect(() => {
    console.log(member);
		// console.log(follow);
    // console.log(memberId);

    if (member?.id !== memberId) {
      // 	//memberId값을 넣어야함
      dispatch(asyncGetOneMemberProfile(memberId));
      dispatch(getPostImageListThunk(memberId));
    }

		if (member.followByMe) {
			setFollow(true);
		}

    // console.log(postImageList);
  }, [dispatch, JSON.stringify(member)]);

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

	const onLogout = () => {
		localStorage.clear();
		alert('로그아웃 되었습니다!');
		navigate('/');
	}
	
  const onShowLogoutOption = () => {
    return (
      modalLogoutVisible && (
        <>
          <Modal
            maxWidth="300px"
            outline="none"
            zIndex="50"
            modalVisible={modalLogoutVisible}
            setModalVisible={setModalLogoutVisible}
          >
            <div className="comment-option-modal-wrapper">
              <div 
								onClick={() => onLogout()}
								className="modal-delete-btn"
							>
								로그아웃
							</div>
              <div onClick={() => setModalLogoutVisible(false)}>취소</div>
            </div>
          </Modal>
        </>
      )
    );
  };

  return (
    <>
      <Header />
      <div className="whole-mypage">
        <div className="mypage-frame">
          <div className="wrap-info">
            <div className="image-area">
              <div className="my-image">
                <img
                  src={member?.profileUrl ? member.profileUrl : image}
                  alt=""
                  style={{ width: "170px", height: "170px" }}
                ></img>
              </div>
            </div>
            <div className="right-info">
              <div className="info-line-1">
                <div className="user-nickname">{member?.nickname}</div>
                {/* {isMe ? (
                  <button
                    onClick={() => {
                      navigate("/ReviseMypage");
                    }}
                    className="button-lets-revise-mypage"
                  >
                    프로필 편집
                </button>
                <button className="button-send-message">메시지 보내기</button>
								)
                {1 ? (
                  <button className="button-follow">
                    onClick={onClickHandlerFollow}
                    팔로우
                  </button>
                ) : null} */}

                {isMe ? (
                  <div>
                    <button
                      onClick={() => {
                        navigate("/ReviseMypage");
                      }}
                      className="button-lets-revise-mypage"
                    >
                      프로필 편집
                    </button>
                  </div>
                ) : (
                  <div>
                    <button className="button-send-message">
                      메시지 보내기
                    </button>
                  </div>
                )}

                {isMe ? null : follow ? (
                  //follow자리에 mypage.~~ 넣기.
                  <button
                    className="button-unfollow"
                    onClick={onChangeFollower}
                  >
                    팔로우 취소
                  </button>
                ) : (
                  <button
                    className="button-follow"
                    onClick={onChangeFollower}
                  >
                    팔로우
                  </button>
                )}

                <p className="info-option" onClick={() => setModalLogoutVisible(true)}>•••</p>
								{onShowLogoutOption()}
              </div>
              <div className="info-line-2">
                <div className="post-area">
                  <div className="mypage-post">게시물</div>
                  <div className="post-number">{member?.postCount}</div>
                </div>
                <div className="follower-area">
                  <div className="mypage-follower">팔로워</div>
                  <div className="follower-number">{member?.follower}</div>
                </div>
                <div className="follow-area">
                  <div className="mypage-follow">팔로우</div>
                  <div className="follow-number">{member?.follow}</div>
                </div>
              </div>
              <div className="info-line-3">
                <div className="mypage-username">{member?.username}</div>
                <div className="mypage-bio">{member?.bio}</div>
                <div className="mypage-url">{member?.websiteUrl}</div>
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
                <div className="div-post-image" key={postImage.id}>
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
