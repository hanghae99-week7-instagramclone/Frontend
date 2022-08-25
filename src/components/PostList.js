import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetAllPosts, asyncGetInifiteScrollPosts } from "../redux/modules/postListSlice";
import Post from "./Post";
import "./PostList.css";

const PostList = ({memberInfo}) => {
  const dispatch = useDispatch();

  const postList = useSelector((state) => state.postList.postList);

  const getAllPosts = () => {
    dispatch(asyncGetAllPosts());
		// dispatch(asyncGetInifiteScrollPosts({
		// 	page: 4,
		// 	size: 5,
		// }))
  };

  useEffect(() => {
    getAllPosts();
  }, [dispatch, JSON.stringify(postList)]);

	
	const [bottom, setBottom] = useState(null);
	const bottomObserver = useRef(null);
	
	// useEffect(() => {
	// 	const observer = new IntersectionObserver(
	// 		entries => {
	// 			if (entries[0].isIntersecting) {
	// 				const { page, totalElement, limit } = params.pageData;
	// 				if (totalElement < limit * (page - 1)) {
	// 					return;
	// 				}
	// 				params.getProductList({ page: page + 1 });
	// 			}
	// 		},
	// 		{ threshold: 0.25, rootMargin: '80px' },
	// 	);
	// 	bottomObserver.current = observer;
	// }, []);

	// useEffect(() => {
	// 	const observer = bottomObserver.current;
	// 	if (bottom) {
	// 		observer.observe(bottom);
	// 	}
	// 	return () => {
	// 		if (bottom) {
	// 			observer.unobserve(bottom);
	// 		}
	// 	};
	// }, [bottom]);

  return (
    <div className="post_list">
      {postList && postList.length > 0 ? (
        postList?.map((item) => <Post key={item.id} postInfo={item} memberInfo={memberInfo} />)
      ) : (
        <div
          style={{ width: "500px", textAlign: "center", marginTop: "100px" }}
        >
          글이 없습니다.
        </div>
      )}
    </div>
  );
};

export default PostList;
