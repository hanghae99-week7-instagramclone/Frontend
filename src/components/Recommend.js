import React from "react";
import './Recommend.css';

const Recommend = () => {
  return (
    <div className="recommend-container">
      <div className="recommend-header">
        <div className="user-profile">
          <img
            alt="user-profile"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/510px-Default_pfp.svg.png?20220226140232"
          />
          <span>nickname</span>
        </div>
        <button>전환</button>
      </div>
      <div className="recommend-content">
        <span>회원님을 위한 추천</span>
        <button>모두 보기</button>
      </div>
      <div className="recommend-user-list">
        {Array.from({ length: 5 }, () => (
          <div className="recommend-user-container">
            <div className="user-profile">
              <img
                alt="user-profile"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/510px-Default_pfp.svg.png?20220226140232"
              />
              <span>nickname</span>
            </div>
            <button>팔로우</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommend;
