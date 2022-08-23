import React from "react";
import { useSelector } from "react-redux";
import Comment from "./Comment";
import "./CommentList.css";

const CommentList = ({ isMain, commentList }) => {
	console.log(commentList);
	
  let comments = useSelector((state) => state.comment.commentlist);
	console.log('comments', comments);

  return (
    <div className="comment-list">
      {isMain
        ? commentList.slice(0, 2).map((item) => {
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
