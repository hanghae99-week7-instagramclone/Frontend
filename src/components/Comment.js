import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "./Modal";
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
	
	const onCheckCommentAuthor = () => {
		console.log(comment);
		if (comment.memberId === +localStorage.getItem('id')) {
			setCommentOptionVisible(true)
		} else {
			alert('작성자만 수정할 수 있습니다!');
		}
	}

  const showCommentOption = (postId, commentId) => {
    return (
      commentOptionVisible && (
        <Modal
          maxWidth="400px"
          outline="none"
          zIndex="200"
          modalVisible={commentOptionVisible}
          setModalVisible={setCommentOptionVisible}
        >
          <div className="comment-option-modal-wrapper">
            <div onClick={() => removeComment(postId, commentId)} className="modal-delete-btn">삭제</div>
            <div onClick={() => setCommentOptionVisible(false)}>취소</div>
          </div>
        </Modal>
      )
    );
  };

  return (
		<>
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

          <button
            className="comment-option"
            onClick={onCheckCommentAuthor}
          >
            <svg aria-label="옵션 더 보기" role="img" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="1.5"></circle>
              <circle cx="6" cy="12" r="1.5"></circle>
              <circle cx="18" cy="12" r="1.5"></circle>
            </svg>
          </button>
        </div>
      </div>
    </div>
    {showCommentOption(comment.postId, comment.id)}
		</>
  );
};

export default Comment;
