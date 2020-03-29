import React from "react";
import * as style from "./style.scss";

import left_data from "./data";


export default function Center() {
  return <div className={style.box}>
    <div className={style.title}>Hamomo</div>
    {/*line表示一行，t表示line中的元素*/}
    <div>
      {left_data.map(line=> <div className={style.line}>{line.map(t=> <div className={style.item}><a>{t}</a></div>)}</div>)}
    </div>

  </div>
}