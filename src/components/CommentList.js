import React from "react";
import timeCalc from "../shared/time";
import "./CommentList.css";

const CommentList = ({ isMain, commentList }) => {
  return (
    <div className="comment-list">
			{commentList?.map((item) => {
        if (isMain) {
          return (
            <div className="comment-content" key={item.id}>
              <span className="comment-nickname">{item.nickname}</span>
              <span>{item.content}</span>
            </div>
          );
        } else {
          return (
            <div className="post-content-detail-container">
							{/* 댓글 작성자 프로필 */}
              <div className="post-user-profile detail-post-user-profile">
                <img
                  alt="post-user-profile"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/510px-Default_pfp.svg.png?20220226140232"
                />
              </div>
							{/* 댓글 내용 */}
              <div className="post-content detail-content">
                <span className="post-nickname">{item.nickname}</span>
                <span>{item.content}</span>

                <div className="comment-react">
                  <div className="post-createdAt">{timeCalc(item.createdAt)}</div>
                  <div className="like comment-like">좋아요 {10}개</div>
                  <button>답글 달기</button>
                </div>
              </div>
            </div>
          );
        }
			})}
    </div>
  );
};

export default CommentList;
