import loader from "../../../assets/img/UsersPagePreloader.svg";
import React from "react";
import s from './Preloader.module.css'

const Preloader = (props) => {
    return <img src={loader} alt={'Image: preload image'} className={s.preloader}/>
}

export default Preloader