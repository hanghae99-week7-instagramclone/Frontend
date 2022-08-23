import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import PostList from "../components/PostList";
import Recommend from "../components/Recommend";
import { asyncGetOneMemberProfile } from "../redux/modules/memberSlice";
import "./Main.css";

const Main = () => {
	const dispatch = useDispatch();

	const member = useSelector((state) => state.member.member);

	useEffect(() => {
		dispatch(asyncGetOneMemberProfile(localStorage.getItem('id')));
	}, [dispatch]);

  return (
    <>
      <Header memberInfo={member}/>
      <div className="main-content">
        <PostList />
				<Recommend memberInfo={member}/>
      </div>
    </>
  );
};

export default Main;
