import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeFollowerThunk } from "../redux/modules/mypageSlice";
import "./Recommend.css";

const Recommend = ({ memberInfo }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [follow, setFollow] = useState(false);

  const onChangeFollower = async (member) => {
    await dispatch(changeFollowerThunk(member.id));
    setFollow(!follow);
  };

  useEffect(() => {
    if (memberInfo.followByMe) {
      setFollow(true);
    }
  }, [follow]);

  return (
    <div className="recommend-user-container" key={memberInfo.id}>
      <div className="recommend-user-profile">
        <img
          onClick={() => navigate(`/mypage/${memberInfo.id}`)}
          alt="recommend-user-profile"
          src={
            memberInfo.profileUrl
              ? memberInfo.profileUrl
              : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/510px-Default_pfp.svg.png?20220226140232"
          }
        />
        <span>{memberInfo.nickname}</span>
      </div>
      {/* <button>팔로우</button> */}
      {follow ? (
        <button
          className="button-unfollow"
          onClick={() => onChangeFollower(memberInfo)}
        >
          팔로우 취소
        </button>
      ) : (
        <button
          className="button-follow"
          onClick={() => onChangeFollower(memberInfo)}
        >
          팔로우
        </button>
      )}
    </div>
  );
};

export default Recommend;
