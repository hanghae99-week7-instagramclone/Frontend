import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncGetAllMembers } from "../redux/modules/memberSlice";
import Recommend from "./Recommend";
import "./RecommendList.css";

const RecommendList = ({ memberInfo }) => {
  const dispatch = useDispatch();
	const navigate = useNavigate();
	
  let memberList = useSelector((state) => state.member.memberlist);
	// console.log(memberList);

  const onCheckMemberList = () => {
    if (memberList.length > 0) {

			// memberList.filter((item) => item.followByMe === false)
			
			memberList = memberList
			.slice()
			.sort(
				(a, b) =>
				new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf(),
        )
        .slice(0, 5);
			// console.log(memberList);

      return (
        <div className="recommend-user-list">
          {memberList.map((item) => (
            <Recommend memberInfo={item} key={item.id}/>
          ))}
        </div>
      );
    } else {
      return <div></div>;
    }
  };

  
	useEffect(() => {
    dispatch(asyncGetAllMembers());
		// console.log(memberList);
	}, [dispatch, JSON.stringify(memberList)])


  return (
    <div className="recommend-container">
      {/* 팔로우 추천 헤더 */}
      <div className="recommend-header">
        <div className="recommend-profile">
          <img
						onClick={() => navigate(`/mypage/${memberInfo.id}`)}
            alt="recommend-profile"
            src={
              memberInfo.profileUrl
                ? memberInfo.profileUrl
                : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/510px-Default_pfp.svg.png?20220226140232"
            }
          />
          <span>{memberInfo.nickname}</span>
        </div>
        <button>전환</button>
      </div>

      {/* 팔로우 추천 내용 */}
      <div className="recommend-content">
        <span>회원님을 위한 추천</span>
        <button>모두 보기</button>
      </div>

      {/* 팔로우 추천 목록 */}
      {onCheckMemberList()}
    </div>
  );
};

export default RecommendList;
