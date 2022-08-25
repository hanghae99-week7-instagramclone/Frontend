import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncGetOneMemberProfile } from "../redux/modules/memberSlice";
import { changeFollowerThunk } from "../redux/modules/mypageSlice";
import "./Recommend.css";

const Recommend = ({ memberInfo }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

	const member = useSelector((state) => state.member.member);

  const [follow, setFollow] = useState(member.length > 0 ? member.followByMe : memberInfo.followByMe);
	
	const onClickFollowBtn = async () => {
		console.log("click follow");
		// onChangeFollower(memberInfo)
    await dispatch(changeFollowerThunk(memberInfo.id));
		await dispatch(asyncGetOneMemberProfile(memberInfo.id));
    setFollow(!follow);
  };

  useEffect(() => {
		console.log(member);
    // if (memberInfo.followByMe) {
    //   setFollow(true);
    // }
  }, [follow, member]);

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
        <div className="recommend-user-wrap">
          <span className="recommend-user-nick">{memberInfo.nickname}</span>
          <span className="recommend-new-txt">Instagram 신규 가입</span>
        </div>
      </div>
      {/* <button>팔로우</button> */}
      {follow ? (
        <button

           className="recommend-button-unfollow"
          // onClick={() => onChangeFollower(memberInfo)}
					onClick={onClickFollowBtn}
        >
          팔로우 취소
        </button>
      ) : (
        <button
         className="recommend-button-follow"
          // onClick={() => onChangeFollower(memberInfo)}
					onClick={onClickFollowBtn}

        >
          팔로우
        </button>
      )}
    </div>
  );
};

export default Recommend;
