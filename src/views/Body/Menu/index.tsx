import React from "react";
import * as style from "./style.scss";
export default function Menu() {
    return(
        <div className={style.menu}>
            <a className={style.item}>小学生编程</a>
            <a className={style.item}>中学生进阶编程</a>
            <a className={style.item}>大学生编程</a>
            <a className={style.item}>软件架构之路</a>
            <a className={style.item}>全栈始于脚下</a>
            <a className={style.item}>产品经理是怎样练成的</a>
        </div>
    )


}
