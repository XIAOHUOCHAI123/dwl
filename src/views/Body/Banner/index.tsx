import React from "react";
import * as style from "./style.scss";
import { Carousel } from "antd";
import imgs from "./img";


export default function Banner() {

  return <div className={style.banner}>
    <Carousel autoplay dotPosition="bottom" dots={true} className={style.main}>
      {imgs.map(item=><div className={style.item}> <img className={style.img} src={item} /></div>)}
    </Carousel>
  </div>
}