import React from "react";
import "./CommentList.css";

const CommentList = ({ isMain }) => {
  return (
    <div className="comment-list">
      {Array.from({ length: 3 }, (_, idx) => {
        if (isMain) {
          return (
            <div className="comment-content" key={idx}>
              <span className="comment-nickname">nickname</span>
              <span>귀엽다!</span>
            </div>
          );
        } else {
          return (
            // <div className="comment-content detail-comment-content" key={idx}>
            // 	<div className="comment-user-profile detail-user-profile">
            //     <img
            //       alt="comment-user-profile"
            //       src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/510px-Default_pfp.svg.png?20220226140232"
            //     />
            //   </div>
            // 	<div className="comment-detail-content">
            // 		<div>
            //       <span className="comment-nickname">nickname</span>
            //       <span>귀엽다! ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ</span>
            // 		</div>
            // 		<div className="comment-react">
            //       <div className="post-createdAt">30분 전</div>
            // 			<button>답글 달기</button>
            // 		</div>
            // 	</div>
            // </div>

            <div className="post-content-detail-container">
              <div className="post-user-profile detail-post-user-profile">
                <img
                  alt="post-user-profile"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/510px-Default_pfp.svg.png?20220226140232"
                />
              </div>
              <div className="post-content detail-content">
                <span className="post-nickname">nickname</span>
                <span>귀여운 시골 강아지를 만났다! </span>

                <div className="comment-react">
                  <div className="post-createdAt">30분 전</div>
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
