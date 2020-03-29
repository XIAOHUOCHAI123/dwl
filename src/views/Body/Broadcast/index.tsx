import React from "react";
import * as style from "./style.scss";
import chapter from "./data";
import img from "./img1.png";
export default function Broadcast() {
    return<div className={style.broadcast}>
            <h1>精选直播</h1>
            <div className={style.main}>
                <div className={style.img}><a><img src={img} className={style.im}></img></a></div>
                <ul className={style.ul}>
                    {chapter.map((v) => <li className={style.li}><div className={style.div}/><a>{v}</a></li>)}
                </ul>
            </div>
        </div>

}
