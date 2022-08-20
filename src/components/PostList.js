import React from "react";
import Post from "./Post";
import './PostList.css';

const PostList = () => {
  return (
		<div className="post_list">
			{Array.from({length: 3}, () => <Post />)}
		</div>
	);
};

export default PostList;
