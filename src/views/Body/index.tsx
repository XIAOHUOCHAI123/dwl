import React from "react";
import * as style from "./style.scss";
import Banner from "./Banner";
import Course from "./Course";
import Broadcast from "./Broadcast";
import Menu from "./Menu"


export default function Body() {
    return <div className={style.box}>
        <Banner/>
        <Menu/>
        <Broadcast />
        <Course />
    </div>
}