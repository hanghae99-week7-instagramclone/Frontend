import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "../elements/Modal";
import { asyncRemoveComment } from "../redux/modules/commentSlice";
import timeCalc from "../shared/time";
import "./Comment.css";

const Comment = ({ comment }) => {
  const dispatch = useDispatch();

  const [commentOptionVisible, setCommentOptionVisible] = useState(false);

  const removeComment = (postId, commentId) => {
    console.log("comment list page!!", postId, commentId);
    dispatch(asyncRemoveComment({ postId: postId, commentId: commentId }));
    setCommentOptionVisible(false);
  };

  const showCommentOption = (postId, commentId) => {
    return (
      commentOptionVisible && (
        <Modal
          maxWidth="300px"
          outline="none"
          zIndex="200"
          modalVisible={commentOptionVisible}
          setModalVisible={setCommentOptionVisible}
        >
          <div className="comment-option-modal-wrapper">
            <div onClick={() => removeComment(postId, commentId)}>삭제</div>
            <div>수정</div>
            <div>취소</div>
          </div>
        </Modal>
      )
    );
  };

  return (
    <div className="post-content-detail-container" key={comment.id}>
      {/* 댓글 작성자 프로필 */}
      <div className="post-user-profile detail-post-user-profile">
        <img
          alt="post-user-profile"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/510px-Default_pfp.svg.png?20220226140232"
        />
      </div>
      {/* 댓글 내용 */}
      <div className="post-content detail-content">
        <span className="post-nickname">{comment.nickname}</span>
        <span>{comment.content}</span>

        <div className="comment-react">
          <div className="post-createdAt">{timeCalc(comment.createdAt)}</div>
          <div className="like comment-like">좋아요 {10}개</div>
          <button>답글 달기</button>

          <button
            className="comment-option"
            onClick={() => setCommentOptionVisible(true)}
          >
            <svg aria-label="옵션 더 보기" role="img" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="1.5"></circle>
              <circle cx="6" cy="12" r="1.5"></circle>
              <circle cx="18" cy="12" r="1.5"></circle>
            </svg>
          </button>
          {showCommentOption(comment.postId, comment.id)}
        </div>
      </div>
    </div>
  );
};

export default Comment;
