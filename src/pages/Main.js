import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import PostList from "../components/PostList";
import RecommendList from "../components/RecommendList";
import { asyncGetOneMemberProfile } from "../redux/modules/memberSlice";
import "./Main.css";

const Main = () => {
	const dispatch = useDispatch();

	const member = useSelector((state) => state.member.me);

	useEffect(() => {
		dispatch(asyncGetOneMemberProfile(localStorage.getItem('id')));
	}, [dispatch]);

  return (
    <>
      <Header/>
      <div className="main-content">
        <PostList memberInfo={member}/>
				<RecommendList memberInfo={member}/>
      </div>
    </>
  );
};

export default Main;
