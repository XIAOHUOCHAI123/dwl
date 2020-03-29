import React from "react";
import * as style from "./style.scss";
import Items from "./Items/Items"

export default function Course() {
  return <div className={style.box}>
    <div className={style.titel}>
      <h1>精选热门课程</h1><br/>
      <hr className={style.hr}/>
    </div>
    <Items/>
  </div>
}