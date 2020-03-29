import React from "react";
import * as style from "./style.scss";
import right_data from "./data";


export default function Center() {
  return <div className={style.box}>
    <div className={style.title}>传送门</div>
    {/*line表示一行，t表示line中的元素*/}
    <div>
      {right_data.map(line=> <div className={style.line}>{line.map(t=> <div className={style.item}><a>{t}</a></div>)}</div>)}
    </div>

  </div>
}