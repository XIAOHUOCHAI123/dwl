import React from "react";
import * as style from "./style.scss";
import { Popover, Avatar } from "antd";
import { Link } from "react-router-dom";
import sign_data from "./data";
import img from "./touxiang.png"

export default function Sign() {
  const content=(
    <div className={style.main}>
        {sign_data.map(t=><div className={style.item}><div className={style.itemStyle}>{t}</div></div>)}

    </div>
  )
  return <div className={style.box}>
    <Link to="signOn" className={style.on} >注册</Link>
    <Link to="signIn" className={style.on} >登录</Link>
      {/*弹出气泡*/}
    <Popover content={content}>
        {/*头像*/}
      <Avatar size="large" icon="user" src={img} alt={"这是头像"} />
    </Popover>
  </div>
}