import React from "react";
import { Link } from "react-router-dom";
import img from "./home.png";
import * as style from "./style.scss";

export default function Home() {
  return <Link to="/home/" className={style.ico}>
      <img src={img} alt="home_img" width="60px" height="70px" />
      <span className={style.span}>哈默默学堂</span>
    </Link>
}