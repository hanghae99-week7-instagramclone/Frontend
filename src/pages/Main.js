import React from "react";
import Header from "../components/Header";
import PostList from "../components/PostList";
import Recommend from "../components/Recommend";
import "./Main.css";

const Main = () => {
  return (
    <>
      <Header />
      <div className="main-content">
        <PostList />
				<Recommend />
      </div>
    </>
  );
};

export default Main;
