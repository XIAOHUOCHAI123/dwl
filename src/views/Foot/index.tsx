import React from "react";
import * as style from "./style.scss";
import Left from "./Left";
import Right from "./Right";

export default function Foot() {

  return <div className={style.foot}>
    <div className={style.box}>
      <Left />
      <Right />
    </div>

    <a href="http://beian.miit.gov.cn/" className={style.a}>备案号：陇ICP备19003937</a>
    <div className={style.a}><span className={style.span}>Copyright Hamomo</span>Power By React</div>
  </div>
}