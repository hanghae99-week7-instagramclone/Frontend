import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetAllMembers } from "../redux/modules/memberSlice";
import "./Recommend.css";

const Recommend = ({ memberInfo }) => {
  const dispatch = useDispatch();
  let memberList = useSelector((state) => state.member.memberlist);

  const onCheckMemberList = () => {
    if (memberList.length > 0) {
      memberList = memberList
        .slice()
        .sort(
          (a, b) =>
            new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf(),
        )
        .slice(0, 5);

      return (
        <div className="recommend-user-list">
          {memberList.map((item) => (
            <div className="recommend-user-container" key={item.id}>
              <div className="recommend-user-profile">
                <img
                  alt="recommend-user-profile"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/510px-Default_pfp.svg.png?20220226140232"
                />
                <span>{item.nickname}</span>
              </div>
              <button>팔로우</button>
            </div>
          ))}
        </div>
      );
    } else {
      return <div></div>;
    }
  };

  useEffect(() => {
    dispatch(asyncGetAllMembers());
  }, [dispatch]);

  return (
    <div className="recommend-container">
      {/* 팔로우 추천 헤더 */}
      <div className="recommend-header">
        <div className="recommend-profile">
          <img
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

export default Recommend;
