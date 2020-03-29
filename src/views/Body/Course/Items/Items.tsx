import React, {Component} from 'react';

import {Link} from "react-router-dom";
import * as style from "./style.scss";
import items from "./data";

export default class Items extends Component{
        state = {
            items
    }
    render() {
        return(
            <div className={style.items}>
                {this.state.items.map((line: any[])=>
                    <div className={style.line}>
                    {line.map(t=>
                        <div className={style.box}>
                            <Link to="" ><img src={t.img} width="250px" height="150px" /></Link>
                            <div className={style.dir}>
                                <Link to="" ><h3 className={style.h3}>{t.title}</h3></Link>
                                <div className={style.line1}>
                                    <span className={style.speed}>{t.schedule}</span>
                                    <div className={style.edu}>{t.organ}</div>
                                    <span className={style.tru}>{t.identification}</span>
                                </div>
                                <div className={style.line1}>
                                    <span className={style.free}>{t.free}</span>
                                    <span className={style.num}>{t.number}</span>
                                </div>
                            </div>
                        </div>)}
                    </div>)
                }

            </div>
        )

    }


    





}