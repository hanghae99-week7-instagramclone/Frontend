import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetAllPosts } from "../redux/modules/postListSlice";
import Post from "./Post";
import "./PostList.css";

const PostList = () => {
  const dispatch = useDispatch();

  const postList = useSelector((state) => state.postList.postList);
  console.log(postList);

  const getAllPosts = () => {
    dispatch(asyncGetAllPosts());
  };

  useEffect(() => {
    getAllPosts();
  }, [dispatch]);

  return (
    <div className="post_list">
      {postList.length > 0 ? (
        postList.map((item) => <Post key={item.id} postInfo={item} />)
      ) : (
        <div style={{ width: "500px", textAlign: "center", marginTop: "100px"}}>글이 없습니다.</div>
      )}
    </div>
  );
};

export default PostList;
