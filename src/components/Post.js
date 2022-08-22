import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Detail from "../pages/Detail";
import timeCalc from "../shared/time";
import CommentList from "./CommentList";
import "./Post.css";

const Post = ({ post }) => {
  const navigate = useNavigate();
  const [modalVisible, setModalVisible] = useState(false);
  console.log("post", modalVisible);

  return (
    <div className="post">
			{/* 글 헤더 */}
      <div className="post-header">
        <div className="post-user-profile">
          <img
            alt="post-user-profile"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/510px-Default_pfp.svg.png?20220226140232"
          />
          <span>{post.nickname}</span>
        </div>
        <svg aria-label="옵션 더 보기" role="img" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="1.5"></circle>
          <circle cx="6" cy="12" r="1.5"></circle>
          <circle cx="18" cy="12" r="1.5"></circle>
        </svg>
      </div>

			{/* 글 이미지, 버튼 */}
      <div className="post-image-btn">
        <div className="post-image">
          <img
            alt="post-image"
            src={post.imgUrlList[0]}
          />
        </div>
        <div className="post-btn-list">
          <div className="post-btn-container">
            <svg aria-label="활동 피드" role="img" viewBox="0 0 24 24">
              <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
            </svg>

            <svg aria-label="댓글 달기" role="img" viewBox="0 0 24 24">
              <path
                d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z"
                fill="none"
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="2"
              />
            </svg>

            <svg aria-label="게시물 공유" role="img" viewBox="0 0 24 24">
              <line
                fill="none"
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="2"
                x1="22"
                x2="9.218"
                y1="3"
                y2="10.083"
              />
              <polygon
                fill="none"
                points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="2"
              />
            </svg>
          </div>

          <div className="post-btn-save-container">
            <svg aria-label="저장" role="img" viewBox="0 0 24 24">
              <polygon
                fill="none"
                points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
            </svg>
          </div>
        </div>
      </div>

			{/* 글 내용, 댓글 */}
      <div className="post-content-container">
        <div className="like">좋아요 {post.likeResponseDto.length}개</div>
        <div className="post-content">
          <span className="post-nickname">{post.nickname}</span>
          <span>{post.content}</span>
        </div>
        <div className="post-comment-num" onClick={() => setModalVisible(true)}>
          댓글 {post.commentResponseDto.length}개 모두 보기
        </div>
        {/* 댓글 상세보기 */}
        {modalVisible && (
          <>
            <Detail
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
							post={post}
            />
          </>
        )}
        <CommentList isMain={true} commentList={post.commentResponseDto}/>
        <div className="post-createdAt">{timeCalc(post.createdAt)}</div>
      </div>

			{/* 댓글 작성 */}
      <div className="post-comment-container">
        <div className="post-btn-container">
          <svg
            aria-label="이모티콘"
            role="img"
            viewBox="0 0 24 24"
          >
            <path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path>
          </svg>
        </div>
				<div className="post-comment-input">
					<textarea type="text" placeholder="댓글 달기..."></textarea>
				</div>
				<button>게시</button>
      </div>
    </div>
  );
};

export default Post;
