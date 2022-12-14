import React from "react";
import Header from "../components/Header";
import InputBox from "../components/InputBox";
import List from "../components/List";

const Home = () => {
  return (
    <>
      <Header />
      <InputBox />
      <List name="working" />
      <List name="done" />
    </>
  );
};

export default Home;
