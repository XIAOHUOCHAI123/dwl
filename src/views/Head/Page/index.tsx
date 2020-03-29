import React from "react";
import * as style from "./style.scss";
import img from "./page.png";
import { Popover } from 'antd';
import page_data from './data'

export default function Page() {
  const content = (
    <div className={style.hover}>

        {page_data.map(t=><div className={style.item}>{t}</div>)}

    </div>
  )
  return <div className={style.box}>
    <Popover content={content}>
      <img src={img} alt="page_img" width="40px" height="40px" />
      <span className={style.span}>分类</span>
    </Popover>

  </div>
}