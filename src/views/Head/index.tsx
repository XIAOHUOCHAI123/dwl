import React from "react";
import * as style from "./style.scss";
import Home from "./Home";
import Page from "./Page";
import SearchInput from "./Search";
import SignLink from "./Sign";


export default function Head() {
  return <div className={style.box}>
    <Home />
    <Page />
    <SearchInput />
    <SignLink />
  </div>
}