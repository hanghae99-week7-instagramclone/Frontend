import React from "react";
import Comment from "./Comment";
import "./CommentList.css";

const CommentList = ({ isMain, commentList }) => {

  return (
    <div className="comment-list">
      {isMain
        ? commentList.map((item) => {
            return (
              <div className="comment-content" key={item.id}>
                <span className="comment-nickname">{item.nickname}</span>
                <span>{item.content}</span>
              </div>
            );
          })
        : commentList.map((item) => {
            return (
							<Comment comment={item} key={item.id}/>
            );
          })}
    </div>
  );
};

export default CommentList;
