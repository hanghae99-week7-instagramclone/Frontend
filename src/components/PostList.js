import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetPosts } from "../redux/modules/postListSlice";
import Post from "./Post";
import './PostList.css';

const PostList = () => {
	const dispatch = useDispatch();

	const postList = useSelector((state) => state.postList.postList);
	console.log(postList);
	
	const getPosts = () => {
		dispatch(asyncGetPosts());
	}

	useEffect(() => {
		getPosts();
	}, [dispatch]);

  return (
		<div className="post_list">
			{postList.map((item) => <Post key={item.id} post={item}/>)}
		</div>
	);
};

export default PostList;
